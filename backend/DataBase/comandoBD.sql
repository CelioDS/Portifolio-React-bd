CREATE TABLE `portifolio` (
    id INT PRIMARY KEY,
    curtidas INT DEFAULT 0,
    nome VARCHAR(255),
    descricao TEXT,
    tecnologias TEXT,
    imagem VARCHAR(255),
    site VARCHAR(255),
    repositorio VARCHAR(255)
);

INSERT INTO `portifolio` (id, curtidas, nome, descricao, tecnologias, imagem, site, repositorio) VALUES
(1, 0, 'To Do List React', 'Aplicação para organização de tarefas que utiliza ReactJS para a interface do usuário, Node.js no backend, Axios para comunicação com o servidor e SQL para armazenamento de dados.', 'HTML, CSS, JavaScript, Banco De Dados, ReactJS, NodeJS e SQL.', 'https://multiversiontech.netlify.app/img/sites/todoreact.webp', 'https://todoreacthitss.netlify.app', 'https://github.com/CelioDS/CursoFront/tree/master/ToDoReact'),
(2, 0, 'Jogo Trol Run', 'O Objetivo do Jogo é alcançar a maior pontuação possível enquanto desvia de obstáculos e a velocidade aumenta. O jogo conta com um Banco De Dados online e um localStorage.', 'HTML, CSS, JavaScript, Banco De Dados, PHP, SQL.', 'https://celiotech.netlify.app/img/jogotrol_3_11zon.webp', 'http://jogotrol.space', 'https://github.com/CelioDS/Projetos-PHP/tree/main/jogomario'),
(3, 0, 'Finan01ceiro', 'Sistema fullstack para gerenciamento financeiro, com API REST e Banco De Dados SQL.', 'HTML, CSS, JavaScript, Banco De Dados, ReactJS, NodeJS e SQL.', 'https://multiversiontech.netlify.app/img/sites/finaceiro.webp', 'https://finan01ceiro.netlify.app', 'https://github.com/CelioDS/AppReciclagem-'),
(4, 0, 'Login e Cadastro de Usuário', 'Sistema completo de CRUD desenvolvido em PHP, com suporte a dois tipos de login: cliente e administrador.', 'HTML, CSS, JavaScript, Banco De Dados, SweetAlert2, ViaCEP, PHP, SQL.', 'https://celiotech.netlify.app/img/bancodedados_1_11zon.webp', 'https://www.linkedin.com/in/celiodasilva01', 'https://github.com/CelioDS/Projetos-PHP/tree/main/loginBanco'),
(5, 0, 'Algemas de Ouro', 'Site institucional desenvolvido para uma agência de detetives.', 'HTML, CSS e JavaScript.', 'https://multiversiontech.netlify.app/img/sites/algemas.webp', 'https://algemasdeouro.netlify.app', 'https://github.com/CelioDS/Projetos-JS/tree/main/algemasdeouro'),
(6, 0, 'Business Here', 'Plataforma para cadastro e gerenciamento de empresas, com funcionalidades fullstack.', 'HTML, CSS, JavaScript, Banco De Dados, ReactJS, NodeJS e SQL.', 'https://multiversiontech.netlify.app/img/sites/sitebussines.webp', 'https://businesshere.netlify.app', 'https://github.com/CelioDS/Projetos-React/tree/main/fullstack%20business'),
(7, 0, 'Site de Clima', 'Aplicação que detecta sua localização e fornece informações climáticas em tempo real.', 'HTML, CSS e JavaScript.', 'https://multiversiontech.netlify.app/img/sites/api2.webp', 'https://climahere.netlify.app', 'https://github.com/CelioDS/Projetos-JS/tree/main/climahere'),
(8, 0, 'Site sobre Peixes', 'Plataforma com informações sobre criação de peixes, incluindo uma calculadora para dimensionamento de aquários.', 'HTML, CSS, Bootstrap e JavaScript.', 'https://multiversiontech.netlify.app/img/sites/sitepeixe.webp', 'https://peixescuidados.netlify.app', 'https://github.com/CelioDS/Projetos-JS/tree/main/sitePeixe'),
(9, 0, 'Site sobre Computadores', 'Site informativo sobre periféricos de computadores e suas utilizações.', 'HTML, CSS e JavaScript.', 'https://multiversiontech.netlify.app/img/sites/sitepc.webp', 'https://multiversiontech.netlify.app', 'https://github.com/CelioDS/Projetos-JS/tree/main/siteComputador');

