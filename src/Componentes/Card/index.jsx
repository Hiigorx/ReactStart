export default function Card({dados}) {
    
    
    
    return (
        <>
            {
            
            dados.map((pegaDados, index)  => (
                <div class="skill-card" key={index}
                style={
                    {
                        backgroundColor: pegaDados.color
                    }

                }>
                <h3>Título: {pegaDados.titulo}</h3>
                <p>Nível: {pegaDados.nivel}</p>
                <p>Tempo de experiência: {pegaDados.exp}</p>
            </div>

            ))
            
            }
        
        </>
    )


}