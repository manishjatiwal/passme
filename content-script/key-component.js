import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const KeyComponent = styled.img`
  position: fixed;
  height: 16px;
  width: 16px;
  top: -100px;
  left: -100px;
  cursor: pointer;
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAACkVBMVEUAAAAA//8AgIBVqqpAv4AzmZkrqqoktpJAn58zs5kuoqIrqpU3pKQzqpkwr58tpZY5qpw2rqEzppkxqp4uopc3pps1qp8zo5kxp50vqpc1p54xpZwwp5cuqps1pZ4zqJkyqpwwpZgvqJo0qp0zppkyqJsxqp4vppo0qJwzqpkyppsxp50wqJo0qpwzp5kxqp0wp5o0qZwzqpkyp5sxqpo0p5szqZ0yppsxp5wxqZo0ppszqJ0yqZoyppwxqJo0qZszp5wyqJoyqZwxp5owqJsyp5oyqJsxqZozqJwyqZoyp5sxqJoxqZszp5wyqJoyqZsxp5wxqJszqZwyp5oyqJsxqZwxp5syqZoyqJsyqJwzqJsxqJozp5syp5wxqJozqZszp5wyqJsyqZwyp5syqJsxqZozp5szqJwyqZsyp5szp5wyqJsyqZsxp5oxqJszqZwyqJoyqJsyqZoxqJszqJwyqZoyqJsyqJwxqZsyqJoxqJsyqJoyqJszqJsyp5oyqJsyqJwxp5szqJsyqJoyp5syqJsxqJszp5syqJwyp5syqJszqZsyqJwyqJsyqZsyqJozqJsyqZwyqJsyqJsyqZoyqZsyqJoxqZsyqJsyqJsyqZsyqJoxqJsyp5syqJsyp5wxqJsyqJsyp5syqJsyqJwxp5syqJsyqJsyqJsyqJsyqJszqJsyqJoyqJsyqJsyqJszqJsyqJoyqJsyqJsyqJszqJsyqJwyqJsyqJsyqJszqJsyqJwyqJsyqJszqZsyqJsyqJsyqZsyqJsxqJsyqZsyqJsyqJsyp5sxqJsyqJsyqJsyqJsyqJoyqJsyqJsyqJsyqJsyqJsyqJsyqJsyqJsyqJsyqJsyqJsyqJsyqJv///8+DNNCAAAA2XRSTlMAAQIDBAUGBwgKCwwODxAREhMUFRYXGBkaGx0fICEiIyQlJicoKSorLC0uNDU2Nzk6Ozw9P0BBQkNERUZHSElKS0xNTk9RUlNVVldYWVpbXF1eX2BhYmNlZmdpbW5xcnN0dXZ6e3x9fn+Ag4SFhoeIiYqLjI2Oj5CRk5aYmZydnp+goaKjpKWmp6mqq6ytrq+wsbKztLe5uru8vb6/wMHDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4+Tl5ufo6err7O3u7/Dx8vP09fb3+fr7/P3+8FA5UQAAAAFiS0dE2u4DJoIAAA5mSURBVHja7Z35exXVHYcHCBEKkhgNLgStymbFiqgVVASptloCdKdVK0QhSKsFNCBd1FoXtkasVJtKrYIKAUyBuhRCrQWEmIQElJjc73/TH9CnaQjJnS13zvm87x8w5zx533Nmcu/cmSCA0Ay69PZ7aza+tudQ8wkrOCeaD+15bUPNvbMuHYSZAeDiu9dsa7NM0rb18bsuwlCKDJux5n3LOO+tvvUcTKVB8e3PHDcnaP39rKH4SpjLlx8xhziyZiLOEmTq5py5xhuzuShM6Jr/zt3mJDvvIIEEuK3enGXHrfiLyZV/Mqepm4TDGAyv+dwcp2PlcDxGZfoB84D9N2Ey2sc+y7vMC3K/ZROIwNf2mjfs4UogNJUnzCM++wFGQzFktXlGzWCshvjcf715x6ZheM2XEa+Yh2wZidn8KN9pXlJ/AW7zoeKf5ikfVGC3f85/z7xl/2j89sfIneYxDaMw3M/1/5/Na7Zwv1ifDN5gnrNpCJb7YLV5zwosn525/vu33B14Puv3PycFArCmSzDdO8P+bhK8xU3jvfMrE2E5rntjek4lgNwN2D6T4ftNhn2cBM6kxoSowndPxncoBXByDMZ78LJJsRHj/89tJsY0nHdn0Ha1ALYivTt3mhzXY70bu/UCeAXr3T4DMkEm4131X4Av7gzA+5dcnlMMIHcZ5r9ghUnyMOZPM/SwZgCH+UbgNLNNlBm4D4IgCJ5VDeB3uA+CIBh2XDWAlmLsB0Eww2SZjv0gCNboBvAY9oMg+EA3gH3YD4KLTZgL8R98RzmAb+Nf+RLAbBX+g23KAbyB/8HtygG08jzxr5o03B08WzuA2+QDuE87gHvkA6jRDmClfAAbtQNYLx/A37QD2CIfwF7tABrkAzikHcBH8gG0agfQLB/Ap9oBnJQPoFM7gE75ALJq5timZXMnjy0pLi4Ze828ZS82pTUOAWSRXYsm9viWZtCkqt0EoBFA++pxvU91/OPtBOB9AC1LSs8+2dLqVgLwOoDcM+V9T/e8NV0E4G8AjVP6n/DUgwTgawC1JfnMeORaAvAygNzCfOdclSMA/wL4/Ef5T3p+BwH4FkDHrDCzntVBAH4FkAv5dufKLgLwKoD7w867igB8CmBD+ImvJQB/AjhwbviJj2okAF8C6Lo2ysyvyxGAJwE8EW3qTxOAHwEcj/hK5/IWAvAigAejzr2aAHwIoC3yG71L2wnAgwBqok9+NQF4EMAV0Sc/jgDcD2BHnNnvIgDnA1gYZ/ZVBOB8AOPjzP4qAnA9gKOxntIz6BgBOB5AbbzpbyIAxwOojjf9ZQTgeABz4k1/PgE4HsDV8ab/dQJwPIBL4k2/ggAcD6Ak3vTLCMDxAGK+uescAiAAAuAUQABcBBIA/wYSAB8EEQAfBRMAXwYRgDsB8HWweAA2Ic7suSHE/QBi3RL2AAE4H0B9nNm/QwDOBxDnpkBuC/chAH4YIh7AifOizp2fhnkRgC2OOvelRgA+BHA84kvcy1sJwIsA7MloU+cBEb4E0DUlysyn8ogYXwKwDyPcFsJDojwKwDaGn/g6IwB/Agj/gTAPivQrAB4VKx6AdcwMM+uZPCzatwBCPS5+Ho+L9y8Ay+X9wOhFvDDCxwB4ZYx8AHYgj4cGT2k0AvA1AF4bpx6AWcviPs4DpUt4caTvAZi11Zzl0ZFXruLVsQoBmFn9wgk9Xx49cdHOVIYigIxytLa68uoxJUVFJRWTK5e+cDStcQggJY5tWjZ38tiS4uKSsdfMW/ZiU1ZDI4A02LVoYs8tfFLVbgLQCKB99bjehxr/eDsBeB9Ay5LSPv6Nq24lAK8DGPgPcgggSwE05nFz39SDBOBrAIX4MocAMhNALu/buqpyBOBfAGFu6JjfQQC+BdAxK8yoszoIwK8ACnZTJwFkI4D7w45bRQA+BbAh/MBrCcCfAA6cG37gUY0E4EsAXddGGfm6HAF4EsAT0YZ+mgD8COD46GhDl7cQgBcBPBh17GoC8CGAtlFRxy5tJwAPAijsY94IoOABXBF98HEE4H4AO+KMvosAnA8g1sOeqwjA+QDGxxn9KgJwPYBCv/CBAAocQKFf+UIABQ6g0C99IoACB1Do174RQIEDKPSLHwmgwAEU+tWvBFDgAAr98mcCKHAAhX79OwEQAAFwCiAALgIJgH8DCYAPggiAj4IJgC+DCGDgAuDrYPEAbEKc0bkhxP0AYt0S9gABOB9AfZzR3yEA5wOIc1Mgt4X7EAA/DBEP4MR5Ucfmp2FeBGCLo4691AjAhwCOXxht6PJWAvAiAHsy2tA8IMKXALqmRBl5Ko+I8SUA+zDCbSE8JMqjAGxj+IHXGQH4E0D4D4R5UKRfAfCoWPEArGNmmFFn8rBo3wII9bj4eTwu3r8ALJf3A6MX8cIIHwPglTHyAdiBPB4aPKXRCMDXAHhtnHoAZi2L+zgPlC7hxZG+B2DWVnOWR0deuYpXxyoEYGb1Cyf0fHn0xEU7LYsQQEocra2uvHpMSVFRScXkyqUvHLWMQgDadBKANicJQJtmAtDm3wSgzTsEoM1fCECb9QSgzQoC0OYeAtBmBgFocwkBSNM6iACkeT0gAGkeIwDtAO4kAO0ARhOAtP+9+NcO4FH8awcwDf/SAbQU4186gCfRrx3ALeiXDuDwUPRLB/AL7EsHkLsU+xl4b1/h2Iz9IDi/QTeA69EflAn7fwv90uvfZuJf2v927gVS3v/5GkB8/duL+Jf2f+oK9n/p74EfZv1L+/9gGOtfma4bWf/SPIJ/ad4cin9lPhmDf2Vy3+T6jwsA1r8s6wbjX5lXz8G/MjtG4F+Z/eVc/0l/AjyG9a9M/QX4l77+G4l/ZWqHcf5X/vzvEf7/V+aY+D3A6v7frsC/8va/Rvz7X/Hz//s3BPjX5dTD6vf/ae//dRMC1r8ub/L7H2X/b/P7T+H9P1c3G/26/g8tvwz7svt/81O3FiFf1f/ex6bz/E9R/62vr/pWOd7V/Lc1f9SwZd3Ke2aMwXlq138NZfxB8Q/4B/wD/gH/gH/AP+Af8A/4B/wD/gH/gH/AP+Af8A/4B/wD/gH/gH/AP+Af8A/4B/wD/gH/gH/AP+Af8A/4B/wD/gH/gH/AP+Af8A/4B/wD/vGPf/zjH//4xz/+8Y9//OMf//jHP/7xj3/84x//+Mc//vGPf/zjH//4xz/+8Y9//OMf//jHP/7xD/gH/AP+Af+Af8A/4B/wD/gH/AP+Af+Af8A/uO/f/jGav6iyfwpQ908B6v4pQN0/Baj7pwB1/xSg7p8C1P1TgLp/ClD3TwHq/ilA3T8FqPunAHX/FKDunwLU/VOAun8KUPdPAer+KUDdPwWo+6cAdf8UoO6fAtT9U4C6fwpQ908B6v4pQN0/Baj7pwB1/xSg7p8C1P1TgLp/ClD3TwHq/ilgICnLoH8eJKW9/s3MdozAjXPrvyHJg9Uixzn/ZYkebgF6XPOf7AGbShHk0vn/9GVbSX1yR3wIQ46t/4QPeqQIR875T/SwNyPJrf3/NMmdBVZgybn1n+ih69Dk3vpPcg/Yiycn/SdWwCeIcm//T3KATzHl5PpPbA9oRJWr/pMpYCuunNz/ExvmOWS56z+Jgfg6yNX9P5mzQGc5utxd/wkM9hK63PYfd7gp+HJ4/49/FliPL+f9xyng44sQ5vb+H2/QU99AmA/+ow7bOQdh7u//0c8Cnd9FmC/+oxSAf5/8hy8A/375D1sA/n3zH64A/PvnP0wB+PfRf/4F4N9P//kWgH9f/edXAP6z/fmf3ZfuVDrnIyzL69+s6/txJtPfHsD6z7r/dAvAf/b9p1kA/l3wn14B+HfDf1oF4D/j1//dC/herGlt7/X+D77/d8Z/3AJG1PZy/xf3/zjkP24BwYKmHsfbwINBnfIfu4DSh450O/u/xP3frvmPXUAw5OYVdXubPju49bkFrH5nrv+T+18AXPdPAer+KUDdPwWo+6cAdf8UoO6fAtT9U4C6fwpQ908B6v4pQN0/Baj7pwB1/xSg7p8C1P1TgLp/ClD3TwHq/ilA3T8FqPunAHX/FKDunwLU/VOAun8KGFDKsuffrKsSMcr+zU7dhBpl/2ZH+LWf6Pn/S57HjvD6N7PcZPwo+zfbgCDd/d/M7FQpioTXv5nNxZG0f/s1knT3fzOzl7Ek7d92o0l4/zez/+BJef2bvYsoaf/2V0wJ7/9mthZVyuvf7Ge4Ul7/ZhORJe2/AVnK+7/ZD7GlvP7tvWJ0KfvP3YwuZf/2KLqUz//2UhG+lP2/Mgxf+Af8A/5B7fr/ZfwnzvBtrH9pNrH+pVmQ5Fc0d53Ev2OUNiXovyy46ST+3WJZov6D4Pp2zv8uUXQkWf9BansA6z8Vbknaf1oF4D8dVibuP52zAPt/StQl7z+NPYD1nxb7UvCf/B7A+k+N5jT8J10A/tPj01T8J3sWYP9PkYPp+E9yD2D9p8m2lPwnVwD+U+W5tPwndRZg/0+Xn6bmP5kC8J8yoztT85/EWYD9P3U2p+c//h7A+k+fqSn6j1sA/geCjSn6j3cWYP8fEMoPp+g/TgH4HyCmnUrRf/SzAPv/gDGnM0X/UQvA/wBy9+cp+o92FmD/z3gBIfxHKQD/GS8glP/wBeA/4wWE9B+2APxnvIDQ/sMVgP+MFxDBf5gC8J/xAiL5z78A/Ge8gIj+8y0A/xkvILL//ArAf8YLiOE/nwLwn/ECYvnvvwD8Z7yAmP77KwD/GS8gtv++C8B/xgtIwH9fBeA/4wUk4v/sBeA/M8zp9Q6R7WUJHf6G1t4OX4v/7DDt4zMF/WFEYoef9O4ZR+/65RD+7Bniwp53ih77cZKH/8rKHnvMnhv5m2eMqZu73Sd2ZGlJwoevWPPJ/w7/ZiWPf88go3/y/LZ/fda0t27F9DS25+LpP3/21X1v/fE3C8byty4c/wVWdSgXBZMfTQAAAABJRU5ErkJggg==);
`

let index = 0

function getKeyComponent({ element }) {
  const keyComponentRef = useRef(null)
  const uniqueId = `dropdownContent${index++}`
  useEffect(() => {
    const assignPosition = () => {
      const { top, left, height, width } = element.getBoundingClientRect()
      const style = element.currentStyle || window.getComputedStyle(element)
      keyComponentRef.current.style.top = `${top + (height - 16) / 2}px`
      keyComponentRef.current.style.left = `${
        left +
        width -
        parseFloat(style.paddingRight) -
        parseFloat(style.borderRightWidth) -
        8
      }px`
    }
    setTimeout(assignPosition, 1000)
    window.addEventListener('resize', assignPosition)
    return () => {
      window.removeEventListener('resize', assignPosition)
    }
  }, [])
  return (
    <KeyComponent
      ref={keyComponentRef}
      onClick={() => {
        console.log(uniqueId)
      }}
    />
  )
}

export default getKeyComponent
