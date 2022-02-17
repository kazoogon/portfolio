import * as THREE from 'three'
import { Vector3 } from 'three'
import * as CONST from '../const'
import { countryInfos, CountryInfoType } from '../data/country'

export default class Earth extends THREE.Group {
  public world: THREE.Mesh
  public countryPoints: THREE.Group[] = []

  constructor() {
    super()
    const loader = new THREE.TextureLoader()
    const geometry = new THREE.SphereGeometry(100, 60, 60)
    const material = new THREE.MeshPhongMaterial({
      map: loader.load(`${CONST.PATH.IMG_JOURNEY}world-map-dot-white.png`),
      bumpScale: 1.0,
      transparent: true,
      side: THREE.DoubleSide, //裏からも見える
    })
    this.world = new THREE.Mesh(geometry, material)
    this.world.receiveShadow = true
    this.createCountryPoints()
  }

  public update = (): void => {
    this.world.rotation.y += 0.002
  }

  /**
   * create place point objects
   */
  private createCountryPoints(): void {
    countryInfos.forEach((country: CountryInfoType) => {
      const latitude = country.latlng[0]
      const longitude = country.latlng[1]
      const point = new THREE.Group()
      point.name = country.name

      this.createPointGround(CONST.COLOR.UNIVERSE_POINT, point)
      this.setPointPos(point, latitude, longitude)

      this.countryPoints.push(point) //マウスとの交差を調べたいものは配列に格納
      this.world.add(point)
    })

    this.add(this.world)
  }

  private createPointGround(color: number, point: THREE.Group): void {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 5, 32, 32),
      new THREE.MeshBasicMaterial({
        color: color,
        map: new THREE.TextureLoader().load(
          `${CONST.PATH.IMG_JOURNEY}point-ground.png`,
        ),
        side: THREE.DoubleSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        name: 'point-ground',
      }),
    )

    point.add(ground)
    ground.rotateX(Math.PI / 2)
  }

  private setPointPos(
    point: THREE.Group,
    latitude: number,
    longitude: number,
  ): void {
    point.position.copy(this.translateGeoCoords(latitude, longitude, 98))
    point.lookAt(new THREE.Vector3(0, 0, 0))
    point.rotateX(80)
    point.translateY(2.5)
  }

  /**
   * 緯度・経度から位置を算出
   * @param {number} latitude  緯度
   * @param {number} longitude 経度
   * @param {number} radius    半径
   * @returns {Vector3}
   */
  private translateGeoCoords(
    latitude: number,
    longitude: number,
    radius: number,
  ): THREE.Vector3 {
    // 仰角
    const phi = (latitude * Math.PI) / 180
    // 方位角
    const theta = ((longitude - 180) * Math.PI) / 180

    const x = -radius * Math.cos(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi)
    const z = radius * Math.cos(phi) * Math.sin(theta)

    return new THREE.Vector3(x, y, z)
  }
}
