# Sistema-de-Gest-o-de-Oficinas-e-Manuten-o-de-Ve-culos
Desenvolver um sistema para gerenciar oficinas mecânicas que oferecem serviços de manutenção em veículos. O sistema deve permitir o cadastro de oficinas, veículos e serviços de manutenção. Cada veículo pode ser levado para a manutenção em diferentes oficinas, e cada manutenção pode incluir múltiplos serviços.

Modelagem:

* Workshop (Oficina)
    * name  - o nome da oficina (String)
    * address - o endereço completo da oficina (String)
    * specialties - uma lista de especialidades da oficina ex: motor, freios, suspensão (Array de Strings)
    * maintenances - Um array de ObjectID referenciando a manutenção, aqui se armazena todas as manutenções realizada pela oficina (é um valor computado)

* Vehicle (Veículo)
    * plate - a placa do veículo (String)
    * model - o modelo do veículo (String)
    * year - o ano de fabricação do veículo (Number)
    * owner - o nome do proprietário do veículo (String)
    * maintenances - Um array de ObjectID referenciando a manutenção, aqui se armazena todas as manutenções feitas em um veículo (é um valor computado)

* Maintenance (Manutenção)
    * workshop - referenciando a oficina onde a manutenção foi realizada (ObjectId em referência ao Workshop)
    * vehicle - referenciando o veículo que foi submetido à manutenção (ObjectId em referência ao Vehicle)
    * services - os serviços prestados, cada um contendo o nome do serviço e o preço (Subdocumento com name (String) e price (Number))
    * date - a data em que a manutenção foi realizada (Date)
    * totalCost - valor total da manutenção (Number computado do campo *price de *services)


Funcionalidades

1. Workshop
    * Criar Oficina (store): Endpoint para criar uma nova oficina.
    * Listar Oficinas (index): Endpoint para listar todas as oficinas cadastradas.
    * Listar Oficina específica (show): Endpoint para listar uma oficina apenas, quero as manutenções como documentos não como IDs.  
    * Atualizar Oficina (update): Endpoint para atualizar os dados de uma oficina específica.
    * Deletar Oficina (destroy): Endpoint para deletar uma oficina.

2. Vehicle
    * Criar Veículo (store): Endpoint para cadastrar um novo veículo.
    * Listar Veículos (index): Endpoint para listar todos os veículos cadastrados.
    * Listar Veículo específica (show): Endpoint para listar uma veículo apenas, quero as manutenções como documentos não como IDs.
    * Atualizar Veículo (update): Endpoint para atualizar os dados de um veículo específico.
    * Deletar Veículo (destroy): Endpoint para deletar um veículo.

3. Maintenance
    * Registrar Manutenção (store): Endpoint para registrar uma nova manutenção, associando-a a uma oficina e um veículo.
    * Listar Manutenções (index): Endpoint para listar todas as manutenções registradas.
    * Listar Manutenção específica (show): Endpoint para listar uma manutenção apenas, , quero o veículo e a oficina como documentos não como IDs.    
    * Atualizar Manutenção (update): Endpoint para atualizar os dados de uma manutenção específica.
    * Deletar Manutenção (destroy): Endpoint para deletar uma manutenção.
