import { useState, useRef } from 'react'

import { selectItem } from '../../../utils/select'

export const useProductDetail = () => {
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
      title: 'Ivory White',
      description:
        'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
      price: 0,
      selected: true
    },
    {
      id: 2,
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
      title: '2 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first.',
      price: 0,
      selected: true
    },
    {
      id: 2,
      title: '3 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first.',
      price: 75,
      selected: false
    }
  ])
  const [features, setfeatures] = useState([
    {
      id: 1,
      title: 'Voice Assistant support',
      description: '',
      price: 0,
      selected: true
    },
    {
      id: 2,
      title: 'Customizable controls',
      description: '',
      price: 25,
      selected: false
    }
  ])

  const selectItems = (id, section) => {
    if (section === 'finish') selectItem(id, finish, setFinish)
    if (section === 'warranty') selectItem(id, warranty, setWarranty)
    if (section === 'features') selectItem(id, features, setfeatures)
    if (section === 'nav') selectItem(id, nav, setNav)
  }

  const onEnter = ({ key }, id, section) => {
    if (key === 'Enter') selectItems(id, section)
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
