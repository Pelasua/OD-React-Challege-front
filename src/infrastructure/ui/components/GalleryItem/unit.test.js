import React from 'react'
import { render, screen } from '@testing-library/react'

import GalleryItem from '.'

test('Render photo gallery item', () => {
  const testProps = {
    type: 'photo',
    content: ''
  }

  render(<GalleryItem type={testProps.type} content={testProps.content} />)

  expect(screen.getByTestId('galleryItem')).toBeTruthy()
  expect(screen.getByTestId('photoItem')).toBeTruthy()
})

test('Render video gallery item', () => {
  const testProps = {
    type: 'video',
    content: ''
  }

  render(<GalleryItem type={testProps.type} content={testProps.content} />)

  expect(screen.getByTestId('galleryItem')).toBeTruthy()
  expect(screen.getByTestId('videoItem')).toBeTruthy()
})
