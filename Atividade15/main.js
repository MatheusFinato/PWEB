function confirmar(){
    confirmado = confirm("Deseja ver os detalhes do curso?");
    if(!confirmado) return;

    cursos = document.getElementById("cursos");

    y = cursos.selectedIndex;
 
    novaJanela = window.open("", "janela" + cursos.options[y], "fullscreen=yes,width = 600, height = 300");
    novaJanela.document.write("<title>Página do Curso " + cursos.options[y].text + "</title>");
    switch (y) {
        case 1:
            novaJanela.document.writeln("<p>Coordenação: Profº Antonio Cesar de Barros Munari</p>");
            novaJanela.document.writeln("<p>Carga horária Noturno: 2.880 horas</p>");
            novaJanela.document.writeln("<p>Carga horária Diurno: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>");    
            break;
        case 2:
            novaJanela.document.writeln("<p>Coordenação: Profª Ma. Cécile Chaves Hernandez Garcia</p>");
            novaJanela.document.writeln("<p>Carga horária Noturno: 2.880 horas</p>");
            novaJanela.document.writeln("<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.</p>");
            break;
        case 3:
            novaJanela.document.writeln("<p>Coordenação: Prof. Me. José Itamar Monteiro</p>");
            novaJanela.document.writeln("<p>Carga horária Vespertino: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.</p>");    
            break;
        case 4:
            novaJanela.document.writeln("<p>Coordenação: Profª Me. Joseli Vergara Marins</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.</p>");    
            break;
        case 5:
            novaJanela.document.writeln("<p>Coordenação:Profº Dr. Délvio Venanzi</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade. Elabora ferramentas para minimizar a incidência de falhas. Elabora e gerencia estratégias para obtenção de certificações. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação</p>");    
            break;
    }
    


    

}