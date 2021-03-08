// ------------------------------ import libraries
import React from 'react'
import { Gallery } from '../../components/Gallery'

// ------------------------------ import components
import { useProductDetail } from './hook'

// ------------------------------ import styles
import {
  StyledContainer,
  StyledDescription,
  StyledDangerText,
  StyledSubtitle,
  StyledPrice,
  StyledNav,
  StyledLi,
  StyledFinishes
} from './styles'
import { Card } from '../../atomComponents/Card'
import { ItemSpecs } from '../../atomComponents/ItemSpecs'

// ------------------------------------ COMPONENT ------------------------------------//
export const ProductDetail = () => {
  const {
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
  } = useProductDetail()
  return (
    <StyledContainer>
      <Gallery />
      <StyledDescription>
        <section>
          <StyledDangerText>New Release</StyledDangerText>
          <h1>MOMENTUM True Wireless 2</h1>
          <StyledSubtitle>Earbuds that put sound first</StyledSubtitle>
          <StyledPrice>
            <small>STARTING AT</small>
            <h2>$295.95</h2>
          </StyledPrice>
        </section>

        <section ref={overview}>
          <StyledNav>
            {nav.map(({ id, label, selected }) => (
              <StyledLi
                tabIndex='0'
                selected={selected}
                onKeyDown={e => {
                  onEnter(e, id, 'nav')
                  scrollToSection(label)
                }}
                onClick={() => {
                  selectItems(id, 'nav')
                  scrollToSection(label)
                }}
                key={id}
              >
                <p>{label}</p>
              </StyledLi>
            ))}
          </StyledNav>
          <p>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2, is not the difference. Thanks to leading
            audio technology and innovation, these new earbuds deliver the best
            listening expericence anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life bu enhancing you
            everyday.
          </p>
        </section>

        <section ref={feature}>
          <h3>Choose your finish.</h3>
          <StyledFinishes>
            {finish.map(fin => (
              <Card
                onClick={() => selectItems(fin.id, 'finish')}
                onKeyDown={e => onEnter(e, fin.id, 'finish')}
                key={fin.id}
                {...fin}
              />
            ))}
          </StyledFinishes>
          <h3>Would you like to add extended warranty coverage?</h3>
          {warranty.map(warr => (
            <Card
              onClick={() => selectItems(warr.id, 'warranty')}
              onKeyDown={e => onEnter(e, warr.id, 'warranty')}
              key={warr.id}
              {...warr}
            />
          ))}
          <h3>Features.</h3>
          {features.map(feat => (
            <Card
              onClick={() => selectItems(feat.id, 'features')}
              onKeyDown={e => onEnter(e, feat.id, 'features')}
              key={feat.id}
              {...feat}
            />
          ))}
        </section>
        <section ref={box}>
          <h3>Specifications.</h3>
          <ItemSpecs
            title='Dimensions'
            description='76.8 x 43.8 x 34.7 mm (earbuds and carging case)'
          />
          <ItemSpecs title='USB Standard' description='USB-C' />
          <ItemSpecs
            title='Power supply'
            description='Sennheiser 7mm dynamic driver'
          />
          <ItemSpecs
            title='Frequency response (Microphone)'
            description='100 Hz to 10 kHz'
          />
          <ItemSpecs title='Frequency response' description='5 - 21,000 Hz' />
          <ItemSpecs
            title='Npise cancellation'
            description='Single-Mic ANC per earbud side'
          />
        </section>
      </StyledDescription>
    </StyledContainer>
  )
}
