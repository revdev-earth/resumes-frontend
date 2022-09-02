let clicks_count = 0
let time_out

export const triple_click_detection = () => {
  // onclick:
  clicks_count++
  clearTimeout(time_out)
  time_out = setTimeout(() => {
    clicks_count = 0
  }, 450)

  if (clicks_count === 3) {
    clicks_count = 0
    return true
  }

  return false
}
