export interface newsDataType {
  index: number
  country: string
  title: string
  desc: string
}
export const newsData: Array<newsDataType> = [
  {
    index: 0,
    country: 'poland',
    title: 'Where is my wallet and phone ???',
    desc: 'When I was in Poland at first time, I went to bar with my friends who mets in university.',
  },
  {
    index: 1,
    country: 'chile',
    title: 'I got cramp !!',
    desc: '',
  },
  {
    index: 2,
    country: 'guatemala',
    title: 'Football master, Kaziu',
    desc: '',
  },
  {
    index: 3,
    country: 'germany',
    title: 'Polite thief',
    desc: '',
  },
  {
    index: 4,
    country: 'Argentina',
    title: 'I cant get on my airplane !!',
    desc: '',
  },
]
