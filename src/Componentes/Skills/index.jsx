import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "Node",
      nivel: "Tipo o Corinthians no Brasileirão",
      exp: "0 dias",
      color: 'red'
    },
    {
      titulo: "Java",
      nivel: "Terrivel",
      exp: "2 dias",
      color: 'cyan'
    },

    {
      titulo: "React",
      nivel: "Start",
      exp: "14 dias",
      color: 'yellow'
    }


  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>

      <Card dados={habilidades} />

    </div>
  )
}

export default Skills;