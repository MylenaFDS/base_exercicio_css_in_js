import React, { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { ListaContainer } from './styles' // Importando estilos de styles.ts

type VagaType = {
  id: number // Corrigi o tipo do id para number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')
  const vagasFiltradas = vagas.filter((x) =>    x.titulo.toLowerCase(). includes(filtro.toLowerCase())
  )

  return (
    <ListaContainer>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ul>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </ul>
    </ListaContainer>
  )
}

export default ListaVagas
