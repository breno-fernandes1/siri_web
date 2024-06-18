"use client"

import FormWrapper from '@/componentes/Forms/FormWrapper/FormWrapper'
import InputRadio from '@/componentes/InputRadio/InputRadio'
import React, { useState } from 'react'
const PerfilDeCustoView = () => {   
     const [integracaoVertical, setIntegracaoVertical] = useState(0)
     const [integracaoHorizontal, setIntegracaoHorizontal] = useState(0)
     const [cicloVidaProduto, setCicloVidaProduto] = useState(0)
     const [automacaoChaoFabrica, setAutomacaoChaoFabrica] = useState(0)
     const [automacaoEmpresarial, setAutomacaoEmpresarial] = useState(0)
     const [automacaoSuprimentos, setAutomacaoSuprimentos] = useState(0)
     return (
        <div>

<FormWrapper tituloprincipal='Forms' descricao='Descrição aqui'>


<InputRadio selectedValue={integracaoVertical} labelAndValue={[{
    label: 'os processos verticais da empresa não São explicitamente definidos.', value: 0,
    
}, {
    label: 'os processos verticais da empresa São definidos e executados por humanos, com o apoio de ferramentas analógicas', value: 1,
    
}, {
    label: 'Processos verticais definidos da empresa são completados por humanos com o apoio de ferramentas digitais', value: 2,
    
}, {
    label: 'Processos e sistemas da empresa são integrados de forma segura em todos os níveis hierárquicos da pirâmide de automação', value: 3,
    
}, {
    label: 'Processos e sistemas da empresa são automatizados, com intervenção humana limitada', value: 4,
    
}, {
    label: 'Processos e sistemas da empresa analisam e reagem aos dados ativamente', value:5,
    
}



]} onChangeState={(e: any) => setIntegracaoVertical(e.target.value)} />
</FormWrapper> 
</div>
)
}

export default PerfilDeCustoView