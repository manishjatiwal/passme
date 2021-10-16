function iconStyles(element) {
  const { top, left, height, width } = element.getBoundingClientRect()
  const style = element.currentStyle || window.getComputedStyle(element)
  return {
    top: top + (height - 16) / 2,
    left:
      left +
      width -
      parseFloat(style.paddingRight) -
      parseFloat(style.borderRightWidth) -
      16
  }
}

function vesselStyles(element) {
  const { top, left, height, width } = element.getBoundingClientRect()
  return {
    top: top + height,
    left,
    width
  }
}

export { iconStyles, vesselStyles }
