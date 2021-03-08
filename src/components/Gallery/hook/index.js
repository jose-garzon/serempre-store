import { useState } from 'react'
import { selectItem } from '../../../utils/select'

export const useGallery = () => {
  const [gallery, setGallery] = useState([
    {
      id: '1',
      img:
        'https://res.cloudinary.com/dwjhnzbz3/image/upload/v1615072026/busd1L_r5voad.png',
      alt: 'EarBuds Sennheiser Momentum in the box',
      selected: true
    },
    {
      id: '2',
      img:
        'https://res.cloudinary.com/dwjhnzbz3/image/upload/v1615072026/buds3L_eqswwn.png',
      alt: 'Details of the EarBuds Sennheiser Momentum',
      selected: false
    },
    {
      id: '3',
      img:
        'https://res.cloudinary.com/dwjhnzbz3/image/upload/v1615072026/buds2L_xydbaq.png',

      alt: 'Extruded view of the Sennheiser Momentum',
      selected: false
    }
  ])

  const [icons] = useState([
    {
      id: '1',
      img:
        'https://res.cloudinary.com/dwjhnzbz3/image/upload/v1615073037/icon1_enfngy.png',
      label: 'Customizable Touch Controls'
    },
    {
      id: '2',
      img:
        'https://res.cloudinary.com/dwjhnzbz3/image/upload/v1615073037/icon2_imryrd.png',
      label: 'Build-in Equalizer'
    },
    {
      id: '3',
      img:
        'https://res.cloudinary.com/dwjhnzbz3/image/upload/v1615073037/icon3_cxmhsf.png',
      label: 'Active Noise Cancellation'
    }
  ])

  const setImage = id => {
    selectItem(id, gallery, setGallery)
  }

  const onEnter = ({ key }, id) => {
    if (key === 'Enter') selectItem(id, gallery, setGallery)
  }

  return {
    gallery,
    icons,
    setImage,
    onEnter,
    selected: gallery.find(img => img.selected === true)
  }
}
