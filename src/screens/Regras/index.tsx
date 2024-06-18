import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FAQScreen from '../FAQ';
import { WebView } from 'react-native-webview';
import { useAuth } from '../../context/LoginContext';
import { stylesDefault } from '../../components/Styled';


const { height, width } = Dimensions.get('window');
const dataTerms = {html: `
<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
/* Font Definitions */
@font-face
{font-family:"Cambria Math";
panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
{font-family:Calibri;
panose-1:2 15 5 2 2 2 4 3 2 4;}
/* Style Definitions */
p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing
{margin:0cm;
font-size:22.0pt;
font-family:"Calibri",sans-serif;}
.MsoChpDefault
{font-size:22.0pt;
font-family:"Calibri",sans-serif;}
.MsoPapDefault
{margin-bottom:10.0pt;
line-height:115%;}
@page WordSection1
{size:595.3pt 841.9pt;
margin:70.85pt 3.0cm 70.85pt 3.0cm;}
div.WordSection1
{page:WordSection1;}
-->
</style>

</head>

<body lang=en-BR link=blue vlink=purple style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNoSpacing><b><span lang=PT-BR>REGULAMENTO</span></b></p>

<p class=MsoNoSpacing><b><span lang=PT-BR>PROGRAMA DE FIDELIDADE </span></b></p>

<p class=MsoNoSpacing><b><span lang=PT-BR>CLUBE PRO+</span></b></p>

<p class=MsoNoSpacing><span lang=PT-BR>O programa de FIDELIDADE CLUBE PRO+, é
instituído pela TOTALENERGIES DISTRIBUIDORA BRASIL&nbsp;LTDA, sociedade
empresária inscrita no CNPJ sob o n. 71.770.689/0001-81, com sede na Avenida
Tobias Salgado, n. 45, Distrito Industrial, Pindamonhangaba/SP, CEP: 12.412-81
e sua filial escritório para o recebimento de notificações inscrita no CNPJ sob
o n. 71.770.689/0003-43, situada na Rua Fidêncio Ramos, nº 302, 3º andar, Torre
B, Vila Olímpia, São Paulo/SP, CEP: 04551-010, neste regulamento devidamente
representada na forma de seu Contrato Social, (“TOTALENERGIES”).</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>I. DEFINIÇÕES </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>1.1. Para os fins deste Regulamento são
considerados, no singular ou no plural, os termos abaixo iniciados por letras
maiúsculas, de forma que sempre que aparecerem neste Regulamento terão os
significados atribuídos abaixo: </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Aplicativo: aplicativo de celular
atrelado ao Programa Clube PRO+ no qual os Beneficiários poderão gerenciar e
conduzir sua participação no Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>PDV: Ponto de Venda que atua com Troca
de óleo registrado pelos Distribuidores responsáveis por seu atendimento.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Beneficiários: pessoas jurídicas e/ou
pessoas físicas que adquirem Produtos TOTALENERGIES elegíveis no Programa nos
Distribuidores autorizados da rede, e se cadastram na Plataforma Clube PRO+, e
que fazem jus aos prêmios deste Programa nos termos deste Regulamento. Para
fins deste Regulamento, não poderão figurar como Beneficiários os colaboradores
do Grupo TOTALENERGIES. Quando pessoas jurídicas, os Beneficiários deverão
estar necessariamente vinculados a uma pessoa física, esta que gozará dos
direitos atribuídos à pessoa jurídica conforme este Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Bipador: pessoas físicas vinculada a um
PDV (pessoa jurídica). Este usuário terá papel exclusivo na ação de escaner/registro
dos QR na plataforma do Programa. Este indivíduo não será elegível ao acúmulo
ou resgate dos prêmios da plataforma Clube PRO+, exceto nas situações que ele
seja o pessoa responsável pelo próprio PDV (pessoa jurídica).</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Canais de Atendimento Clube PRO+:
central de atendimento por meio de telefone <span style='background:yellow'>0800
000 0000</span> e online por meio da Plataforma Clube PRO+, habilitada ao
esclarecimento de dúvidas quanto ao Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Produtos Elegíveis: Lista de Produtos TOTALENERGIES
participantes deste programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Resgate: benefício concedidos aos
Beneficiários de acordo com suas respectivas compras de produtos elegíveis e escaner
dos QR codes na plataforma Clube PRO+. Fica já estabelecido que os resgates
acontecem via plataforma TOTALENERGIES através de transferência bancária via
PIX.</span></p>

<p class=MsoNoSpacing><a name="_Hlk147471479"><span lang=PT-BR>Pontos: é
unidade de peso atribuída aos produtos participantes da campanha. Uma vez
acumulados, os Pontos serão convertidos em moeda monetária (R$) e ficarão
disponíveis para resgates conforme as regras do Programa.</span></a><span
lang=PT-BR> Os prêmios terão validade de 12 meses (dose) meses contados a partir
da data de crédito.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>QR: Código de leitura aplicado nas
caixas de produtos TOTALENERGIES elegíveis a este programa. Será através do
escaneamento/registro deste QR code que os pontos serão gerados e convertidos
em prêmios.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Chave PIX: identificador de conta para
transferências bancárias.&nbsp;A chave Pix utilizada poderá ser: CPF, número
telefônico, endereço de e-mail ou chave aleatória. O Beneficiário poderá optar
por utilizar qualquer um destes dados.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Programa Clube PRO+ (“Programa”):
programa de fidelidade idealizado, desenvolvido, promovido e administrado pela TOTALENERGIES,
que confere prêmios aos Beneficiários, nos termos deste Regulamento. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Rede de Distribuição TOTALENERGIES
Participante: pessoas jurídicas autorizadas pela TOTALENERGIES para
comercialização de Produtos TOTALENERGIES que participam do Programa conforme
regulamento próprio. A Rede de Distribuição TOTALENERGIES participante é aquela
informada na plataforma Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Grupos de Compra: são agrupamentos de
pessoas jurídicas e/ou físicas que, por interesses próprios, negociam e/ou
administram seus negócios em conjunto. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Representantes Legais: são as pessoas
físicas que representam legalmente os Grupos de Compra ou as pessoas jurídicas
tidas como Beneficiários do Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>II. CADASTRO E PARTICIPAÇÃO NO PROGRAMA </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.1. Os Beneficiários são
automaticamente pré-cadastrados no Programa, devendo confirmar sua participação
na Plataforma Clube PRO+. Em caso de dúvida, os Beneficiários devem entrar em
contato com os canais de atendimento Clube PRO+.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>Ao concluírem seus cadastros, os
Beneficiários serão convidados a aceitarem os termos e condições deste
Regulamento.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.1.1. As pessoas físicas e/ou pessoas
jurídicas deverão optar por participar individualmente ou por meio de Grupo de
Compra. Para que não restem dúvidas, não será permitida a participação
simultânea no Programa de forma individual e por meio de Grupo de Compras.  </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.1.2. É condição essencial para
participação no Programa que os Beneficiários aceitem os termos e condições
deste Regulamento. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.2.3. Ao realizarem seus cadastros no
Programa, os Beneficiários declaram que todas as informações disponibilizadas
são verídicas e ainda que: (i) são maiores de 18 (dezoito) anos, no caso de
pessoas físicas.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.2.4. É de responsabilidade do
Beneficiário indicar via plataforma do Clube PRO+ o “Bipador”. Responsável pelo
escaneamento/registro dos QR codes das caixas de produtos TOTALENERGIES
elegíveis nesta campanha.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.2.5. O Beneficiário também poderá ser
o responsável pelo escaneamento/registro do QR Code das caixas de produtos TOTALENERGIES
elegíveis não implicando em qualquer impacto as regras deste regulamento.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.2.6. É de responsabilidade do
Beneficário realizar a gestão dos “bipadores” vinculados ao seu PDV. O
Beneficiário poderá fazer a gestão desta equipe via plataforma Clube PRO+.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>2.2.7. Não será possível indicar o mesmo
bipador para PDV diferentes (CNPJ). Só será permitido o vínculo a um único PDV.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>III. ACÚMULO E RESGATE DOS PRÊMIOS </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>3.1. Somente após a confirmação do
aceite aos termos deste Regulamento é que os Beneficiários poderão fazer uso
dos seus prêmios. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>3.2. Detalhes quanto ao acúmulo de
Pontos por produto encontram-se descritos no aplicativo Clube PRO+ na sessão:
Produtos elegíveis. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>3.3. O resgate dos prêmios acumulados
pelos Beneficiários será realizado dentro da plataforma Clube PRO+ através de
transação financeira PIX. Os termos e condições de resgate são determinados
pela Plataforma Clube PRO+ e são regidos por seus regulamentos. Para que não
restem dúvidas, a Plataforma Clube PRO+ é conduzida por empresa independente,
direta e exclusivamente responsável pelo resgate dos Prêmios, cabendo à TOTALENERGIES
tão somente a gestão e regramento dentro do seu próprio Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>3.3.1. A liberação dos prêmios aos
Beneficiários ocorrerá de forma instantânea a partir do acúmulo mínimo do saldo
para resgate estabelecido em R$ 100,00. Não serão permitidos resgates
inferiores a este valor. A transação de transferência ocorre de maneira online
e instantaneamente no momento da solicitação da transação bancária.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>3.3.2. O Beneficiário responsável pela
conta no Clube PRO+, poderá realizar transações de resgates para terceiros,
sendo ele totalmente responsável pela aplicação e destino de seus prêmios.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR> IV. ACÚMULO DE PONTOS E CONVERSÃO DE
PRÊMIOS</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.1. Os Beneficiários acumularão Pontos no
Programa em duas etapas:</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>i. aquisição de Produtos TOTALENERGIES
elegíveis ao Programa na Rede de Distribuição autorizada e elegíveis neste
Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>ii. escaneamento/registro do QR Code
contido nas caixas dos produtos elegíveis ao programa na plataforma Clube PRO+.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.2. Fica desde já esclarecido que a
aquisição de Produtos TOTALENERGIES elegíveis nesta campanha realizada em entidades/Distribuidores
não elegíveis ao programa, não possibilitará o acúmulo de Pontos e acúmulo de pontos
e premiações. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.3. Quando os pontos forem originados
da participação em campanhas sazonais promovidas pela TOTALENERGIES, as regras
de acúmulo de Pontos e prêmios correspondentes aplicáveis serão aqueles
constantes nos regulamentos das campanhas vigentes. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.4. Os Pontos e Prêmios eventualmente
concedidos pela TOTALENERGIES aos quais os Beneficiários não façam jus nos
termos deste Regulamento serão estornados pela TOTALENERGIES, sem qualquer
ônus. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.5. Não será possível a transferência de
pontos entre contas de outros beneficiários do Programa.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.6. Os Beneficiários que integrarem
Grupos de Compra serão considerados em conjunto para fins cálculo de acúmulo de
Pontos e conversão de premiações. Os Pontos e Prêmios efetivamente acumulados
serão creditados em conta única, não sendo possível o desmembramento por
unidade de PDV (pessoa jurídica). </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.7. Em caso de discordância do saldo prêmios
em seu cadastro, os Beneficiários deverão solicitar a averiguação junto aos
Canais de Atendimento Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.8. A alegação dos Beneficiários quanto
ao não lançamento de Pontos deverá ocorrer dentro do prazo de validade dos
Pontos pleiteados e não computados no registro de pontos do Beneficiário, nos
termos deste Regulamento.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.9. Não terá validade para fins de
geração de pontos ou prêmios a apresentação de Notas fiscais de compra de
produtos TOTALENERGIES elegíveis neste programa. A única e exclusiva forma de
geração de pontos e premiações neste programa se dá através do escaneamento/registro
do QR code na plataforma Clube PRO+.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>4.10. A TOTALENERGIES poderá, a qualquer
momento, e a seu exclusivo critério, alterar a forma de acúmulo dos Pontos no
Programa, inclusive adotar um cálculo diferenciado por tipo ou categoria de
produto ou outro referencial, seja em caráter definitivo ou promocional. Os
novos valores e a proporcionalidade dos Pontos serão informados por meio da
Plataforma Clube PRO+ e em outros canais de fácil acesso público que a TOTALENERGIES
julgar necessário, com antecedência mínima de 15 (quinze) dias da data de
início da efetiva alteração a ser implementada. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>V. VERIFICAÇÃO DE INCONSISTÊNCIAS E
FRAUDES </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>5.1. A TOTALENERGIES se reserva ao
direito de efetuar toda e qualquer ação corretiva que se aplique às ações de
Beneficiário que venham a interferir no bom funcionamento do Programa, como
também se reserva ao direito de efetuar análises periódicas, baseadas em
critérios objetivos apurados nos registros dos Beneficiários, hipótese em que,
se constatadas inconsistências, fica-lhe facultado o direito de suspender a
participação do Beneficiário no Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>5.1.1. A retirada da suspensão do
Beneficiário se dará após análise a ser efetuada pela TOTALENERGIES, a partir
do contato do Beneficiário com os Canais de atendimento Clube PRO+, ocasião em
que a TOTALENERGIES poderá solicitar informações ao Beneficiário. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>5.2. A TOTALENERGIES, dentro dos limites
da boa-fé, adotará métodos objetivos para verificar a razoabilidade do acúmulo
de Pontos, a partir dos históricos de participação no Programa, da aquisição
média de Produtos TOTALENERGIES e do perfil do Beneficiário junto ao Programa,
de forma inclusive, a identificar eventuais inconsistências no sistema, a fim
de prontamente corrigir distorções e/ou coibir imperfeições, e de zelar pela
integridade do Programa. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>5.3. A ocorrência da suspensão implica a
perda imediata dos Pontos e prêmios do Beneficiário, independente dos prazos de
validade de suas premiações. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>5.4. Após análise fundamentada dos
argumentos dos Beneficiários, se restarem constatadas inconsistências nos
Pontos e Prêmios acumulados, os mesmos serão automaticamente cancelados, sem
que caibam ao Beneficiário quaisquer compensações. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>5.5. Caso seja verificado dolo do
Beneficiário em fraudar e/ou não cumprir os termos e condições deste
Regulamento, bem como os princípios do Programa, A TOTALENERGIES poderá: (i)
excluir o Beneficiário do Programa; (ii) não mais aceitar que o Beneficiário
infrator acumule Pontos e Prêmios, e/ou realize o resgate do saldo de prêmios
acumulados e; (iii) tomar eventuais medidas legais cabíveis contra o
Beneficiário. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>VI. CONDUTA E OBRIGAÇÕES DO BENEFICIÁRIO
</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>6.1. Sem prejuízo das demais disposições
deste Regulamento, como condição para utilização da Plataforma Clube PRO+, e
por consequência, para participação no Programa, o Beneficiário expressamente
declara e garante que: </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(i) não utilizará as informações nele
contidas para fins ilegais; </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(ii) não cederá a terceiros, a qualquer
título, sob qualquer pretexto e a qualquer tempo, seu nome de usuário e sua
senha de acesso à Plataforma Clube PRO+; </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(iii) não praticará quaisquer atos que
violem a legislação aplicável à utilização da Plataforma Clube PRO+; </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(iv) não obterá ou tentará obter acesso
impróprio a informações de outro Beneficiário da Plataforma Clube PRO+; </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(v) fornecerá todas as informações
necessárias à utilização da Plataforma Clube PRO+; </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(vi) todas as informações fornecidas
para utilização da Plataforma Clube PRO+ são válidas e corretas;</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(vii) à sua responsabilidade,
providenciará todos os equipamentos e sistemas necessários para ter acesso à
Plataforma Clube PRO+;</span></p>

<p class=MsoNoSpacing><span lang=PT-BR> (viii) que leu e está ciente e de pleno
acordo com todos os termos e condições deste Regulamento. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>VII. EXCLUSÃO DE GARANTIAS E DE
RESPONSABILIDADES </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>7.1. a TOTALENERGIES tomará todas as
medidas a seu alcance necessárias à preservação das informações dos
Beneficiários na Plataforma Clube PRO+. Contudo, os Beneficiários declaram-se
cientes de que a Plataforma Clube PRO+ poderá ser alvo de ações delituosas que
eventualmente poderão expor informações nela constantes. Para estes casos, a TOTALENERGIES
se exime de toda e qualquer responsabilidade pelos danos e prejuízos de toda
natureza que possam decorrer da exposição delituosa das informações atinentes
aos Beneficiários disponibilizadas pela Plataforma Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>8.5. A TOTALENERGIES se exime, ainda, de
todos e quaisquer danos e prejuízos de toda natureza que possam decorrer da
transmissão, difusão, armazenamento, disponibilização, recepção, obtenção ou
acesso indevido às informações do Beneficiário disponibilizadas na Plataforma Clube
PRO+, e em particular, ainda que não de modo exclusivo, pelos danos e prejuízos
que possam decorrer: </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(i) do descumprimento da moral, dos bons
costumes geralmente aceitos ou da ordem pública, como consequência da
transmissão, difusão, armazenamento, disponibilização, recepção, obtenção ou
acesso indevido das informações disponibilizadas na Plataforma Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(ii) da realização de atos de
concorrência desleal e publicidade ilícita por parte de Beneficiários e/ou
terceiro em função da transmissão, difusão, armazenamento, disponibilização,
recepção, obtenção ou acesso indevido às informações disponibilizadas na
Plataforma Clube PRO+; </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(iii) da falta de precisão, exatidão,
pertinência e/ou atualidade das informações contidas na Plataforma Clube PRO+;</span></p>

<p class=MsoNoSpacing><span lang=PT-BR> (iv) da inadequação para qualquer tipo
de propósito, ou da frustração das expectativas geradas pelas informações
disponibilizadas na Plataforma Clube PRO+; e </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>(v) da violação de segredos empresariais
e/ou compromissos contratuais de qualquer tipo em função da transmissão,
difusão, armazenamento, disponibilização, recepção, obtenção ou acesso indevido
às informações disponibilizadas na Plataforma Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>VIII. REGRAS CÓDIGOS QR</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>8.1 Período de escaneamento/leitura dos
QR Code: os QR Code impressos nas caixas dos Produtos TOTALENERGIES elegíveis
terão prazo de validade de 12 meses (doze) meses para serem registrados na plataforma
Clube PRO+, contados a partir da emissão do código e não da data de compra do
produto. Após este período, os códigos serão inativados e perdem sua validade.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR> 8.2. Após o código QR ser utilizado
através de registro na plataforma Clube PRO+, o mesmo não poderá ser utilizado
novamente. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>8.3. O QR code poderá ser registrado na
plataforma de duas formas:</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>            (i) via escaneamento do
código através da câmera do celular;</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>            (ii) por meio da digitação
do código impresso na caixa no campo indicado na plataforma Clube PRO+.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>IX. DISPOSIÇÕES GERAIS </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.1. Ao participarem do Programa, os
Beneficiários deverão cumprir e estar de acordo com todas as regras do Programa
e da Plataforma Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.2. O Beneficiário se obriga a manter
atualizados seus dados cadastrais junto ao Programa Clube PRO+, em especial
para o recebimento de comunicações. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR> 9.3. O Beneficiário poderá esclarecer
eventuais dúvidas sobre o Programa por meio dos Canais de atendimento Clube
PRO+.</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.4. Ao entrar no Programa, efetuando
seu cadastro, o Beneficiário automaticamente anui integralmente com todos os
termos e condições deste Regulamento, sem ressalvas, inclusive com o
recebimento de emails promocionais relacionados às atividades da TOTALENERGIES,
pesquisas e mensagens em SMS bem como e-mails referentes à comunicação acerca
de assuntos relevantes à sua participação no Programa. Caso seja de interesse
do Beneficiário cessar o recebimento de e-mails promocionais da TOTALENERGIES,
este poderá, a qualquer tempo, sem necessidade de prévia justificativa ou que
lhe seja imposto encargo de qualquer espécie, a partir do recebimento do
primeiro e-mail promocional, solicitar o imediato cancelamento do recebimento
destes, conforme instruções dispostas no corpo do próprio e-mail promocional e
também por meio dos Canais de atendimento Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.5. O Beneficiário autoriza o uso
gratuito de seu nome, e-mail, imagem e voz em qualquer tipo de mídia, incluindo
internet, e peças promocionais para fins de divulgação de eventuais premiações
recebidas no âmbito do Programa, sem qualquer ônus para a TOTALENERGIES. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.6. Os Beneficiários outorgam a TOTALENERGIES
o direito de armazenar em banco de dados as informações contidas no cadastro
dos Beneficiários e as informações referentes aos seus hábitos de compra e resgate
dos prêmios, comprometendo-se, a TOTALENERGIES, a respeitar a privacidade dos
Beneficiários e manter total confidencialidade dessas informações,
utilizando-as de acordo com a Política de Privacidade Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.7. Fica assegurado a TOTALENERGIES o
direito de, a qualquer tempo, mediante aviso prévio de 30 (trinta) dias
cancelar ou modificar parcial ou totalmente o Programa, assegurados aos
Beneficiários as premiações que fizerem jus até a data da sua modificação ou
cancelamento, na forma deste Regulamento. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>9.8. Este Programa está isento de
qualquer modalidade de sorte. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>10.9. O descumprimento das cláusulas e
condições deste Regulamento pelo Beneficiário ensejará o cancelamento das
premiações por este. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>11.10. Os casos omissos neste
Regulamento serão solucionados segundo o entendimento exclusivo da TOTALENERGIES.
</span></p>

<p class=MsoNoSpacing><span lang=PT-BR>12.11. A qualquer tempo, os
Beneficiários poderão cancelar sua participação no Programa. Para tanto, os
mesmos deverão solicitar a exclusão de sua participação no Programa por meio de
procedimento próprio constante nos Canais de atendimento Clube PRO+. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>12.12. A tolerância da TOTALENERGIES com
o Beneficiário quanto ao não cumprimento de qualquer uma das obrigações
assumidas neste Regulamento não implicará alteração contratual, novação, perdão
ou renúncia de direito. A TOTALENERGIES poderá, a qualquer tempo, exigir do
Beneficiário, o fiel e cabal cumprimento deste Regulamento.  </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>14.13. Este Regulamento entra em vigor a
partir de 27/11/2023 e vigorará por prazo indeterminado. </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>X. FORO </span></p>

<p class=MsoNoSpacing><span lang=PT-BR>10.1. Este Regulamento é regido pelas
leis brasileiras. Quaisquer controvérsias dele oriundas deverão ser dirimidas
no Foro da Comarca da Capital do Estado de São Paulo, com renúncia a qualquer
outro, por mais privilegiado que seja. </span></p>

</div>

</body>

</html>


`};

const RulesScreen: React.FC = () => {
  const { userName } = useAuth();
  return (
    <View style={styles.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>

      </View>
      <ScrollView >
        <WebView
          style={styles.webview_}
          source={dataTerms}
          startInLoadingState={true}
          javaScriptEnabled={true}
          scalesPageToFit={true}
          originWhitelist={['*']}
          nestedScrollEnabled={true}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    height: 'auto' // Increase the height here
  },
  answer: {
    fontSize: 16,
    color: '#333',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  }, text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: '80%'
  },
  containerRed: {
    backgroundColor: 'red',
    height: 150,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBalance: {
    width: '80%',
    backgroundColor: 'white',
    height: 230,
    borderRadius: 8,
    marginTop: -70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 30,
    paddingLeft: 20,
    gap: 20,
  },
  text_subTitleSize: {
    fontSize: 14
  },
  text_subTitle: {
    marginTop: 10,
    fontWeight: "bold"
  },
  button: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  buttonText: {
    color: '#A6A6A6',
    fontSize: 16,
  },
  underline: {
    height: 1,
    backgroundColor: '#A6A6A6',
    width: '100%',
    marginTop: 4,
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#85D151',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width: 200
  },
  icon: {
    marginRight: 10,
  },
  greenButtonText: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    width: '90%',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  menuItemIcon: {
    marginRight: 10,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  outline1: { color: '#000000', left: -1, top: -1 },
  imageBig: {
    width: '80%',
    resizeMode: 'cover',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8
  },
  webview_: {
    
    marginTop: 10,
    
    width: width * 1.05,
    height: height - (height * 0.25)
  }
});

export default RulesScreen;
