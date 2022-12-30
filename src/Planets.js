export default function Planets(props) {
  const planets = [
    { name: "Mars", isGasPlane: false },
    { name: "Earth", isGasPlane: false },
    { name: "Jupiter", isGasPlane: true },
    { name: "Venus", isGasPlane: false },
    { name: "Neptune", isGasPlane: true },
    { name: "Uranus", isGasPlane: true },
  ]

  return (
    <h1>
      {planets.map(
        (element, index) => !element.isGasPlane && <h1> {element.name}</h1>
      )}
    </h1>
  )
}
