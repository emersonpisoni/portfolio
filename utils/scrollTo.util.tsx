export function scrollToUtil(elementId: string) {
  const element = document.getElementById(elementId)

  element?.scrollIntoView({ behavior: 'smooth' })
}