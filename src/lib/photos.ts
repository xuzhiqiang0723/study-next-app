import { StaticImageData } from 'next/image'
import imgTemp from '@/assets/images/opengraph-image.jpg'
export type Photo = {
  id: string
  name: string
  href: string
  username: string
  imageSrc: StaticImageData
}

const photos: Photo[] = [
  {
    id: '1',
    name: 'Kevin Canlas',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp,
    username: '@kvncnls'
  },
  {
    id: '2',
    name: 'Pedro Duarte',
    username: '@peduarte',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '3',
    name: 'Ahmad Awais',
    username: '@MrAhmadAwais',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '4',
    name: 'Leandro Soengas',
    username: '@lsoengas',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '5',
    name: 'Samina',
    username: '@saminacodes',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '6',
    name: 'lafond.eth',
    username: '@laf0nd',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '7',
    name: '山岸和利💛',
    username: '@ykzts',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '8',
    name: 'Altngelo',
    username: '@AfterDarkAngelo',
    href: 'https://wallhaven.cc/w/gp1j9l',
    imageSrc: imgTemp
  },
  {
    id: '9',
    name: 'Matias Baldanza',
    href: 'https://twitter.com/matiasbaldanza/status/1404834163203715073',
    username: '@matiasbaldanza',
    imageSrc: imgTemp
  }
]

export default photos
