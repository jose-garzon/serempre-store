import { useState, useRef, useContext } from 'react'

import { TotalContext } from '../../../context'
import { selectItem } from '../../../utils/select'

export const useProductDetail = () => {
  const { addToCart } = useContext(TotalContext)
  const overview = useRef(null)
  const feature = useRef(null)
  const box = useRef(null)

  const [nav, setNav] = useState([
    { id: 1, label: 'Overview', selected: true },
    { id: 2, label: 'Feature', selected: false },
    { id: 3, label: "What's in the box?", selected: false }
  ])
  const [finish, setFinish] = useState([
    {
      id: 1,
      type: 'finish',
      title: 'Ivory White',
      description:
        'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
      price: 0,
      selected: true
    },
    {
      id: 2,
      type: 'finish',
      title: 'Matte Black',
      description:
        'Of all of the celestial bodies that capture our attention and fascination as astronomers.',
      price: 0,
      selected: false
    }
  ])
  const [warranty, setWarranty] = useState([
    {
      id: 1,
      type: 'warranty',
      title: '2 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first.',
      price: 0,
      selected: true
    },
    {
      id: 2,
      type: 'warranty',
      title: '3 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first.',
      price: 75,
      selected: false
    }
  ])
  const [features, setfeatures] = useState([
    {
      id: 1,
      type: 'features',
      title: 'Voice Assistant support',
      description: '',
      price: 0,
      selected: true
    },
    {
      id: 2,
      type: 'features',
      title: 'Customizable controls',
      description: '',
      price: 25,
      selected: false
    }
  ])

  const selectItems = (obj, section) => {
    if (section === 'finish') selectItem(obj.id, finish, setFinish)
    if (section === 'warranty') selectItem(obj.id, warranty, setWarranty)
    if (section === 'features') selectItem(obj.id, features, setfeatures)
    if (section === 'nav') selectItem(obj.id, nav, setNav)

    if (section !== 'nav') addToCart(obj)
  }

  const onEnter = ({ key }, obj, section) => {
    if (key === 'Enter') {
      selectItems(obj.id, section)
      addToCart(obj)
    }
  }

  const scrollToSection = section => {
    let ref = null
    if (section === 'Overview') ref = overview
    if (section === 'Feature') ref = feature
    if (section === "What's in the box?") ref = box
    window.scroll({
      top: ref.current.offsetTop,
      left: ref.current.offsetLeft,
      behavior: 'smooth'
    })
  }

  return {
    nav,
    finish,
    warranty,
    features,
    selectItems,
    onEnter,
    overview,
    feature,
    box,
    scrollToSection
  }
}
