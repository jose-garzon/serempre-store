export const selectItem = (id, state, setState) => {
  const updated = [...state]
  setState(updated.map(img => (img.selected = false)))
  const foundIndex = updated.findIndex(img => img.id === id)
  const found = updated.find(item => item.id === id)
  found.selected = true
  updated[foundIndex] = found
  setState(updated)
}
