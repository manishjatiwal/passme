function iconStyles(element) {
  let { top, left, height, width } = element.getBoundingClientRect()
  const style = element.currentStyle || window.getComputedStyle(element)
  if (top === 0 || left === 0) {
    top = left = -200
  }
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
  let { top, left, height, width } = element.getBoundingClientRect()
  if (top === 0 || left === 0) {
    top = left = -200
  }
  return {
    top: top + height + 6,
    left,
    width
  }
}

export { iconStyles, vesselStyles }
