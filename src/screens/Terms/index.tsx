import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FAQScreen from "../FAQ";
import { WebView } from "react-native-webview";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const { height, width } = Dimensions.get("window");
const dataTerms = {
  html: `
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
 {font-family:"Calibri Light";
 panose-1:2 15 3 2 2 2 4 3 2 4;}
@font-face
 {font-family:Carlito;
 panose-1:2 11 6 4 2 2 2 2 2 4;}
/* Style Definitions */
p.MsoNormal, li.MsoNormal, div.MsoNormal
 {margin:0cm;
 text-autospace:none;
 font-size:23.0pt;
 font-family:"Carlito",sans-serif;}
h1
 {margin-top:0cm;
 margin-right:0cm;
 margin-bottom:0cm;
 margin-left:41.95pt;
 text-autospace:none;
 font-size:28.0pt;
 font-family:"Carlito",sans-serif;}
p.MsoBodyText, li.MsoBodyText, div.MsoBodyText
 {margin:0cm;
 text-autospace:none;
 font-size:23pt;
 font-family:"Carlito",sans-serif;}
a:link, span.MsoHyperlink
 {color:blue;
 text-decoration:underline;}
a:visited, span.MsoHyperlinkFollowed
 {color:purple;
 text-decoration:underline;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
 {margin-top:0cm;
 margin-right:0cm;
 margin-bottom:0cm;
 margin-left:13.05pt;
 text-autospace:none;
 font-size:22.0pt;
 font-family:"Carlito",sans-serif;}
p.TableParagraph, li.TableParagraph, div.TableParagraph
 {mso-style-name:"Table Paragraph";
 margin-top:5.1pt;
 margin-right:0cm;
 margin-bottom:0cm;
 margin-left:7.5pt;
 text-autospace:none;
 font-size:22.0pt;
 font-family:"Carlito",sans-serif;}
.MsoChpDefault
 {font-size:11.0pt;
 font-family:"Calibri",sans-serif;}
.MsoPapDefault
 {text-autospace:none;}
@page WordSection1
 {size:596.5pt 843.0pt;
 margin:69.0pt 73.0pt 14.0pt 73.0pt;}
div.WordSection1
 {page:WordSection1;}
@page WordSection2
 {size:596.5pt 843.0pt;
 margin:80.0pt 73.0pt 14.0pt 73.0pt;}
div.WordSection2
 {page:WordSection2;}
/* List Definitions */
ol
 {margin-bottom:0cm;}
ul
 {margin-bottom:0cm;}
-->
</style>

</head>

<body lang=en-BR link=blue vlink=purple style='word-wrap:break-word;padding: 100;'>

<div class=WordSection1>

<h1 align=center style='margin-top:2.25pt;margin-right:106.05pt;margin-bottom:
0cm;margin-left:105.9pt;margin-bottom:.0001pt;text-align:center'><span lang=PT>POLÍTICA
DE PRIVACIDADE CLUBE PRO +</span></h1>

<p class=MsoBodyText style='margin-top:.35pt'><b><span lang=PT
style='font-size:13.0pt'>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:11.35pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT
style='font-family:"Arial",sans-serif'>Essa<span style='letter-spacing:-1.0pt'>
</span>versão<span style='letter-spacing:-.9pt'> </span>da<span
style='letter-spacing:-.95pt'> </span>nossa<span style='letter-spacing:-1.05pt'>
</span>Política<span style='letter-spacing:-.95pt'> </span>de<span
style='letter-spacing:-1.05pt'> </span>Privacidade<span style='letter-spacing:
-.9pt'> </span>(doravante<span style='letter-spacing:-.95pt'> </span>denominada<span
style='letter-spacing:-1.0pt'> </span>“Política”)<span style='letter-spacing:
-1.05pt'> </span>é<span style='letter-spacing:-.95pt'> </span>v</span><span
lang=PT>álida<span style='letter-spacing:-.4pt'> </span>a<span
style='letter-spacing:-.5pt'> </span>partir </span><span lang=PT>de 27 de Novembro
de<span style='letter-spacing:-.05pt'> </span>2023.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
9.5pt'>&nbsp;</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:12.05pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>A
presente Política tem por finalidade informar as pessoas físicas ou jurídicas <b>(doravante
</b></span><b><span lang=PT style='font-family:"Arial",sans-serif'>denominado<span
style='letter-spacing:-.8pt'> </span>“Usuários”)<span style='letter-spacing:
-.8pt'> </span></span></b><span lang=PT>que<span style='letter-spacing:-.2pt'> </span>de<span
style='letter-spacing:-.15pt'> </span>qualquer<span style='letter-spacing:-.15pt'>
</span>forma<span style='letter-spacing:-.25pt'> </span>se<span
style='letter-spacing:-.15pt'> </span>utilizem<span style='letter-spacing:-.1pt'>
</span>dos<span style='letter-spacing:-.25pt'> </span>recursos<span
style='letter-spacing:-.2pt'> </span>da<span style='letter-spacing:-.25pt'> </span>plataforma<span
style='letter-spacing:-.2pt'> </span>intitulada </span><span lang=PT
style='font-family:"Arial",sans-serif'>“Clube Pro+” </span><b><span lang=PT>(doravante
denominado </span></b><b><span lang=PT style='font-family:"Arial",sans-serif'>“Plataforma”)</span></b><span
lang=PT>, sobre as nossas práticas de privacidade e demonstrar o compromisso da
<b>TOTALENERGIES (doravante<span style='letter-spacing:-.7pt'> </span>denomi</b></span><b><span
lang=PT style='font-family:"Arial",sans-serif'>nada<span style='letter-spacing:
-1.2pt'> </span>“TOTALENERGIES”,<span style='letter-spacing:-1.2pt'> </span>“nós”<span
style='letter-spacing:-1.25pt'> </span>ou<span style='letter-spacing:-1.2pt'> </span>“nos”,<span
style='letter-spacing:-1.2pt'> </span>“nossa”</span><span lang=PT>),<span
style='letter-spacing:-.7pt'> </span></span></b><span lang=PT>sociedade<span
style='letter-spacing:-.7pt'> </span>inscrita<span style='letter-spacing:-.8pt'>
</span>no<span style='letter-spacing:-.6pt'> </span>CNPJ<span style='letter-spacing:
-.65pt'> </span>sob<span style='letter-spacing:-.75pt'> </span>o<span
style='letter-spacing:-.55pt'> </span>nº </span><span lang=PT>71.770.689/0001-81,
com sede na Avenida Tobias Salgado, n. 45, Distrito Industrial,
Pindamonhangaba/SP, 12.412-770 e sua filial escritório para o recebimento de
notificações inscrita no CNPJ sob o n. 71.770.689/0003-43, situada na Rua
Fidêncio Ramos, nº 302, 3º andar, Torre B, Vila Olímpia, São Paulo/SP, CEP:
04551-010, com a privacidade e a proteção dos Dados Pessoais tratados de seus Usuários.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:12.05pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Os
termos dessa Política se aplicam aos Usuários do aplicativo Clube Pro+ <b>(doravante
</b><b>denominado</b></span><b><span lang=PT style='font-family:"Arial",sans-serif'>
“</span><span lang=PT>Aplicativo</span></b><b><span lang=PT style='font-family:
"Arial",sans-serif'>”)</span><span lang=PT>.</span></b></p>

<p class=MsoBodyText style='margin-top:.05pt'><b><span lang=PT
style='font-size:11.5pt'>&nbsp;</span></b></p>

<h1 style='margin-left:30.1pt;text-align:justify;text-indent:-24.15pt'><span
lang=PT style='letter-spacing:-.45pt'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>OBJETIVO DESTA POLÍTICA</span></h1>

<p class=MsoBodyText style='margin-top:.25pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoListParagraph style='margin-top:0cm;margin-right:12.2pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify;text-indent:
0cm;line-height:111%'><span lang=PT style='letter-spacing:-1.4pt'>1.1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>A<span style='letter-spacing:-.55pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.5pt'> </span>emprega<span style='letter-spacing:-.5pt'>
</span>os<span style='letter-spacing:-.65pt'> </span>melhores<span
style='letter-spacing:-.45pt'> </span>esforços<span style='letter-spacing:-.45pt'>
</span>para<span style='letter-spacing:-.5pt'> </span>fornecer<span
style='letter-spacing:-.6pt'> </span>as<span style='letter-spacing:-.5pt'> </span>proteções<span
style='letter-spacing:-.45pt'> </span>adequadas<span style='letter-spacing:
-.5pt'> </span>em<span style='letter-spacing:-.45pt'> </span>todas as suas
operações e para implementar as políticas e os procedimentos mais consistentes
e rigorosos. Assim, por meio desta Política de Privacidade, a TOTALENERGIES
esclarece a respeito das condições sob as quais coletamos, utilizamos,
armazenamos, compartilhamos, transferimos e protegemos seus Dados<span
style='letter-spacing:-.2pt'> </span>Pessoais</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT style='font-size:
12.0pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:12.1pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify;line-height:
111%'><span lang=PT>Ao<span style='letter-spacing:-.1pt'> </span>consentir<span
style='letter-spacing:-.3pt'> </span>com<span style='letter-spacing:-.1pt'> </span>esta<span
style='letter-spacing:-.25pt'> </span>Política,<span style='letter-spacing:
-.3pt'> </span>os<span style='letter-spacing:-.15pt'> </span>Usuários<span
style='letter-spacing:-.3pt'> </span>estão<span style='letter-spacing:-.2pt'> </span>cientes<span
style='letter-spacing:-.15pt'> </span>de<span style='letter-spacing:-.25pt'> </span>que<span
style='letter-spacing:-.15pt'> </span>a<span style='letter-spacing:-.25pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.3pt'> </span>será<span style='letter-spacing:-.3pt'> </span>a<span
style='letter-spacing:-.15pt'> </span>controladora<span style='letter-spacing:
-.3pt'> </span>nos casos em que couber à TOTALENERGIES as decisões sobre o
Tratamento de seus Dados Pessoais e declara e<span style='letter-spacing:-.35pt'>
</span>concorda<span style='letter-spacing:-.4pt'> </span>que<span
style='letter-spacing:-.35pt'> </span>nós<span style='letter-spacing:-.5pt'> </span>podemos<span
style='letter-spacing:-.5pt'> </span>tratar<span style='letter-spacing:-.65pt'>
</span>os<span style='letter-spacing:-.5pt'> </span>seus<span style='letter-spacing:
-.6pt'> </span>Dados<span style='letter-spacing:-.65pt'> </span>Pessoais<span
style='letter-spacing:-.55pt'> </span>em<span style='letter-spacing:-.45pt'> </span>conformidade<span
style='letter-spacing:-.5pt'> </span>com<span style='letter-spacing:-.45pt'> </span>os<span
style='letter-spacing:-.5pt'> </span>termos<span style='letter-spacing:-.45pt'>
</span>aqui estabelecidos.</span></p>

<p class=MsoBodyText style='margin-top:.2pt'><span lang=PT style='font-size:
12.0pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:12.15pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify;line-height:
111%'><span lang=PT>Os<span style='letter-spacing:-.35pt'> </span>Usuários<span
style='letter-spacing:-.3pt'> </span>deverão<span style='letter-spacing:-.2pt'>
</span>ler<span style='letter-spacing:-.3pt'> </span>atentamente<span
style='letter-spacing:-.25pt'> </span>a<span style='letter-spacing:-.3pt'> </span>presente<span
style='letter-spacing:-.25pt'> </span>Política,<span style='letter-spacing:
-.3pt'> </span>certificando-se<span style='letter-spacing:-.25pt'> </span>de<span
style='letter-spacing:-.25pt'> </span>haver<span style='letter-spacing:-.4pt'> </span>compreendido
e<span style='letter-spacing:-.65pt'> </span>aceito<span style='letter-spacing:
-.65pt'> </span>todas<span style='letter-spacing:-.65pt'> </span>as<span
style='letter-spacing:-.65pt'> </span>disposições<span style='letter-spacing:
-.6pt'> </span>aqui<span style='letter-spacing:-.7pt'> </span>estabelecidas.<span
style='letter-spacing:-.65pt'> </span>Caso<span style='letter-spacing:-.7pt'> </span>os<span
style='letter-spacing:-.65pt'> </span>Usuários<span style='letter-spacing:-.75pt'>
</span>tenham<span style='letter-spacing:-.6pt'> </span>alguma<span
style='letter-spacing:-.7pt'> </span>ressalva<span style='letter-spacing:-.75pt'>
</span>quanto ao fornecimento dos Dados Pessoais à Plataforma por meio do
Website, ou quanto à utilização das mesmas de qualquer forma permitida por esta
Política de Privacidade e pelos Termos e Condições de Uso, os mesmos não
deverão acessar, se cadastrar ou utilizar a<span style='letter-spacing:-.95pt'>
</span>Plataforma.</span></p>

<p class=MsoBodyText style='margin-top:.15pt'><span lang=PT style='font-size:
12.0pt'>&nbsp;</span></p>

<h1 style='margin-left:5.95pt'><span lang=PT>DEFINIÇÕES</span></h1>

<p class=MsoBodyText><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:6.05pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Para
os fins desta Política, devem ser consideradas as seguintes definições e
descrições para seu melhor entendimento, quando referidas em letra maiúscula ou
minúscula, plural ou singular, com ou sem negrito:</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-left:5.95pt;text-align:justify'><b><span
lang=PT>Dados Pessoais: </span></b><span lang=PT>informação relacionada a
pessoa natural identificada ou identificável;</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:0cm;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><b><span
lang=PT>LGPD: </span></b><span lang=PT>Lei Geral de Proteção de Dados Pessoais
(Lei n.º 13.709, de 14 de agosto de 2018);</span></p>

<p class=MsoBodyText style='margin-top:.5pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-left:5.95pt;text-align:justify'><b><span
lang=PT>Controlador: </span></b><span lang=PT>pessoa natural ou jurídica, de
direito público ou privado, a quem competem as</span></p>

</div>

<span lang=PT style='font-size:11.0pt;font-family:"Carlito",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<div class=WordSection2>

<p class=MsoBodyText style='margin-top:1.95pt;margin-right:0cm;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt'><span lang=PT>decisões referentes
ao Tratamento de Dados Pessoais;</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-left:5.95pt'><b><span lang=PT>Titular: </span></b><span
lang=PT>pessoa natural a quem se referem os dados pessoais que são objeto de
Tratamento;</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:0cm;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt'><b><span lang=PT>Base Legal: </span></b><span
lang=PT>são as hipóteses legais previstas na LGPD que autorizam a TOTALENERGIES
a tratar Dados Pessoais.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><b><span lang=PT>Aplicativo: </span></b><span
lang=PT>aplicativo de celular atrelado ao Programa Clube PRO+ no qual os usuários
poderão gerenciar e conduzir sua participação no Programa.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT>Programa Clube
PRO+ (“Programa”)</span></b><span lang=PT>: programa de fidelidade idealizado,
desenvolvido, promovido e administrado pela TOTALENERGIES. </span></p>

<p class=MsoBodyText style='margin-top:.2pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify;line-height:
98%'><b><span lang=PT>IP:<span style='letter-spacing:-.25pt'> </span></span></b><span
lang=PT>Abreviatura<span style='letter-spacing:-.25pt'> </span>de<span
style='letter-spacing:-.35pt'> </span><i>Internet<span style='letter-spacing:
-.3pt'> </span>Protocol</i>.<span style='letter-spacing:-.3pt'> </span>É<span
style='letter-spacing:-.2pt'> </span>um<span style='letter-spacing:-.15pt'> </span>conjunto<span
style='letter-spacing:-.25pt'> </span>alfanumérico<span style='letter-spacing:
-.15pt'> </span>que<span style='letter-spacing:-.3pt'> </span>identifica<span
style='letter-spacing:-.25pt'> </span>os<span style='letter-spacing:-.2pt'> </span>dispositivos<span
style='letter-spacing:-.2pt'> </span>dos Usuáriso na<span style='letter-spacing:
-.1pt'> </span>Internet.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<h1 style='margin-top:0cm;margin-right:281.9pt;margin-bottom:0cm;margin-left:
5.95pt;margin-bottom:.0001pt;text-indent:0cm;line-height:200%'><span lang=PT
style='letter-spacing:-.45pt'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>UTILIZAÇÃO DA <span style='letter-spacing:-.15pt'>PLATAFORMA
</span>Acesso à<span style='letter-spacing:-.25pt'> </span>Plataforma 
(Aplicativo)</span></h1>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:11.8pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Quando<span
style='letter-spacing:-.2pt'> </span>os<span style='letter-spacing:-.35pt'> </span>Usuários<span
style='letter-spacing:-.35pt'> </span>acessam<span style='letter-spacing:-.2pt'>
</span>o aplicativo, para que funcione corretamente, a TOTALENERGIES precisa
acessar e utilizar as seguintes interfaces do dispositivo móvel dos Usuários
para os seguintes propósitos:</span></p>

<p class=MsoNormal><span lang=PT style='font-size:11.5pt'>&nbsp;</span></p>

<table class=TableNormal1 border=1 cellspacing=0 cellpadding=0
style='margin-left:13.8pt;border-collapse:collapse;border:none'>
<tr style='height:23.7pt'>
 <td width=136 valign=top style='width:102.15pt;border:solid black 1.0pt;
 padding:0cm 0cm 0cm 0cm;height:23.7pt'>
 <p class=TableParagraph style='margin-top:5.8pt'><span lang=PT>Interface</span></p>
 </td>
 <td width=431 valign=top style='width:323.55pt;border:solid black 1.0pt;
 border-left:none;padding:0cm 0cm 0cm 0cm;height:23.7pt'>
 <p class=TableParagraph style='margin-top:5.8pt'><span lang=PT>Propósito</span></p>
 </td>
</tr>
<tr style='height:23.7pt'>
 <td width=136 valign=top style='width:102.15pt;border:solid black 1.0pt;
 border-top:none;padding:0cm 0cm 0cm 0cm;height:23.7pt'>
 <p class=TableParagraph style='margin-top:5.8pt'><span lang=PT>Notificações</span></p>
 </td>
 <td width=431 valign=top style='width:323.55pt;border-top:none;border-left:
 none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
 padding:0cm 0cm 0cm 0cm;height:23.7pt'>
 <p class=TableParagraph style='margin-top:5.8pt'><span lang=PT>Recebimento de
 avisos e comunicações gerais da Plataforma</span></p>
 </td>
</tr>
</table>

<p class=MsoNormal><span lang=PT>&nbsp;</span></p>

<h1 style='margin-top:2.85pt;margin-right:0cm;margin-bottom:0cm;margin-left:
5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Tipos de Dados
Pessoais coletados e suas finalidades</span></h1>

<p class=MsoBodyText style='margin-top:.1pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:12.3pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Ao
se cadastrar e/ou utilizar a Plataforma, podemos coletar e tratar os seguintes
tipos de Dados Pessoais para as respectivas finalidades:</span></p>

<p class=MsoBodyText style='margin-top:.25pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:11.85pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><b><span
lang=PT>Cadastro: </span></b><span lang=PT>Para realizar o cadastro na
Plataforma, os Usuários precisam fornecer os seguintes Dados Pessoais: nome
completo, e-mail, CPF, telefone, data de nascimento, concordar com os Termos e
Condições de Uso da Plataforma TOTALENERGIES </span><span lang=PT
style='font-family:"Arial",sans-serif'>(“Termos de Uso”) e com esta Política de
</span><span lang=PT>Privacidade;</span></p>

<p class=MsoBodyText style='margin-top:.1pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:11.85pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><b><span
lang=PT>Atendimento de chamados: </span></b><span lang=PT>Quando os Usuários
entram em contato com os serviços de suporte da<span style='letter-spacing:
-.35pt'> </span>Plataforma,<span style='letter-spacing:-.4pt'> </span>a<span
style='letter-spacing:-.45pt'> </span>TOTALENERGIES<span style='letter-spacing:
-.3pt'> </span>pode<span style='letter-spacing:-.3pt'> </span>coletar<span
style='letter-spacing:-.5pt'> </span>os<span style='letter-spacing:-.35pt'> </span>seguintes<span
style='letter-spacing:-.4pt'> </span>Dados<span style='letter-spacing:-.4pt'> </span>Pessoais:<span
style='letter-spacing:-.4pt'> </span>nome,<span style='letter-spacing:-.35pt'> </span>CPF,<span
style='letter-spacing:-.5pt'> </span>e-mail,<span style='letter-spacing:-.25pt'>
</span>historico<span style='letter-spacing:-.35pt'> </span>de qrCodes
scaneados e telefone. Utilizaremos tais dados para categorizar questionamentos,
respondê-los e, se aplicável, investigar qualquer tipo de violação aos Termos e
Condições de Uso da Plataforma, à presente Política de Privacidade ou a
qualquer regulamento de programas de relacionamentos promovidos pela<span
style='letter-spacing:-.05pt'> </span>TOTALENERGIES;</span></p>

<p class=MsoBodyText style='margin-top:.1pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:11.9pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><b><span
lang=PT>Verificação de fraude: </span></b><span lang=PT>Por questões de
segurança e prevenção à fraude, a TOTALENERGIES pode realizar a análise dos
seguintes Dados Pessoais dos Usuários: Nome, CPF, e-mail, histórico de qrCodes e
telefone;</span></p>

<p class=MsoBodyText style='margin-top:.4pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-left:5.95pt'><b><span lang=PT>Pagamento: </span></b><span
lang=PT>Para o processamento de pagamentos, são coletadas a chave PIX  e
utilização dos dados já capturados no processo de cadastro.</span></p>

<p class=MsoBodyText style='margin-top:.5pt'><span lang=PT style='font-size:
12.0pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><b><span
lang=PT>Comunicação de Marketing: </span></b><span lang=PT>A TOTALENERGIES poderá
fazer ações de marketing em sua plataforma, incluindo direct (SMS, whatsapp e <i>push
notification</i>) com a finalidade de fazer melhorias efetivas na qualidade dos
nossos serviços e plataforma, ter uma maior assertividade na comunicação.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:5.9pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><b><span
lang=PT>Auditoria: </span></b><span lang=PT>Para a realização das atividades de
auditoria, a TOTALENERGIES utilizará os seguintes Dados Pessoais: nome, CPF,
RG, endereço e e-mail, a fim de verificar e analisar as atividades
desenvolvidas;</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.25pt'><span lang=PT style='font-size:
12.0pt'>&nbsp;</span></p>

<h1 style='margin-top:.05pt;margin-right:0cm;margin-bottom:0cm;margin-left:
48.1pt;margin-bottom:.0001pt;text-indent:-35.05pt'><span lang=PT
style='letter-spacing:-.45pt'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>COMPARTILHAMENTO DOS DADOS<span style='letter-spacing:
-.1pt'> </span>PESSOAIS</span></h1>

<p class=MsoBodyText><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:5.6pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Para
cumprir os objetivos informados nesta Política e conseguir oferecer os melhores
produtos, serviços e experiência, os seus dados pessoais poderão ser
compartilhados com outras empresas parceiras<span style='letter-spacing:-.35pt'>
</span>de<span style='letter-spacing:-.3pt'> </span>negócio<span
style='letter-spacing:-.35pt'> </span>da<span style='letter-spacing:-.35pt'> </span>TOTALENERGIES.<span
style='letter-spacing:-.35pt'> </span>Contudo,<span style='letter-spacing:-.4pt'>
</span>somente<span style='letter-spacing:-.4pt'> </span>terão<span
style='letter-spacing:-.2pt'> </span>acesso<span style='letter-spacing:-.4pt'> </span>aos<span
style='letter-spacing:-.45pt'> </span>dados<span style='letter-spacing:-.3pt'> </span>quem<span
style='letter-spacing:-.4pt'> </span>realmente<span style='letter-spacing:-.35pt'>
</span>precisa. Ainda, a TOTALENERGIES adota todas as medidas de segurança
possíveis, técnicas e operacionais, para assegurar que seus dados pessoais
estejam bem protegidos.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Para
a condução do programa de fidelidade promovido pela TOTALENERGIES e para o
oferecimento de produtos e serviços, a TOTALENERGIES poderá compartilhar os
Dados Pessoais dos Usuários com parceiros com as quais trabalhamos (por
exemplo: meio de pagamento digital) para facilitar a continuidade das
atividades<span style='letter-spacing:-.65pt'> </span>da<span style='letter-spacing:
-.65pt'> </span>Plataforma.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Em
todos os casos, garantiremos que os Dados Pessoais sejam tratados apenas para
propósitos legítimos, específicos, explícitos e informados aos Usuários, sem
possibilidade de Tratamento posterior<span style='letter-spacing:-.2pt'> </span>de<span
style='letter-spacing:-.15pt'> </span>forma<span style='letter-spacing:-.2pt'> </span>incompatível<span
style='letter-spacing:-.25pt'> </span>com<span style='letter-spacing:-.15pt'> </span>a<span
style='letter-spacing:-.15pt'> </span>finalidade<span style='letter-spacing:
-.15pt'> </span>informada.<span style='letter-spacing:-.1pt'> </span>E<span
style='letter-spacing:-.15pt'> </span>trabalhamos<span style='letter-spacing:
-.2pt'> </span>apenas<span style='letter-spacing:-.15pt'> </span>com<span
style='letter-spacing:-.15pt'> </span>parceiros que seguem os mesmos padrões da
TOTALENERGIES em proteção de dados, segurança e de respeito à<span
style='letter-spacing:-1.4pt'> </span>LGPD.</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:2.85pt;margin-right:5.85pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Não
autorizamos nossos prestadores de serviços a utilizar e/ou divulgar os Dados
Pessoais dos Usuários, exceto na medida necessária para prestar os serviços em
nosso nome ou para cumprir obrigações legais. Nossos prestadores de serviços
somente utilizarão os Dados Pessoais dos Usuários de acordo com as instruções
emitidas pela TOTALENERGIES e em conformidade com as finalidades mencionadas na
presente Política.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>A
TOTALENERGIES poderá compartilhar as Informações dos Usuários com empresas
afiliadas da TOTALENERGIES (isto é,<span style='letter-spacing:-.35pt'> </span>pessoas<span
style='letter-spacing:-.5pt'> </span>jurídicas<span style='letter-spacing:-.35pt'>
</span>que<span style='letter-spacing:-.5pt'> </span>sejam<span
style='letter-spacing:-.4pt'> </span>controladas<span style='letter-spacing:
-.5pt'> </span>ou<span style='letter-spacing:-.5pt'> </span>controladoras<span
style='letter-spacing:-.55pt'> </span>ou<span style='letter-spacing:-.5pt'> </span>estejam<span
style='letter-spacing:-.45pt'> </span>sob<span style='letter-spacing:-.45pt'> </span>controle<span
style='letter-spacing:-.5pt'> </span>conjunto<span style='letter-spacing:-.4pt'>
</span>com a TOTALENERGIES), para que utilizem referidas informações nas
atividades descritas nesta Política de Privacidade, sob as mesmas condições de
Tratamento dadas pela TOTALENERGIES, nos limites da legislação vigente.</span></p>

<p class=MsoBodyText style='margin-top:.1pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Além
das situações de compartilhamento de Dados Pessoais acima expostas, a TOTALENERGIES
também poderá compartilhar os Dados Pessoais dos Usuários quando acreditar, de
boa-fé, que tem a obrigação de: (i) cumprir uma lei, regulamento ou ordem
judicial; (ii) responder a solicitações de informação<span style='letter-spacing:
-.5pt'> </span>feitas<span style='letter-spacing:1.45pt'> </span>por<span
style='letter-spacing:-.5pt'> </span>órgão<span style='letter-spacing:-.4pt'> </span>regulador,<span
style='letter-spacing:-.6pt'> </span>autoridade<span style='letter-spacing:
-.4pt'> </span>policial<span style='letter-spacing:-.45pt'> </span>e<span
style='letter-spacing:-.55pt'> </span>demais<span style='letter-spacing:-.6pt'>
</span>autoridades<span style='letter-spacing:-.4pt'> </span>públicas,<span
style='letter-spacing:-.45pt'> </span>inclusive em casos relativos à segurança
nacional; (iii) fazer cumprir e/ou proteger propriedade ou direitos da TOTALENERGIES,
inclusive para investigar fraudes e ajudar a prevenir ameaças de segurança,
inclusive da informação, ou outras atividades criminosas ou maliciosas; ou (iv)
proteger os interesses legítimos de terceiros, incluindo a segurança pessoal
dos colaboradores da<span style='letter-spacing:-.35pt'> </span>TOTALENERGIES.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.85pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Conforme
a TOTALENERGIES julgar cabível, a seu exclusivo critério, a TOTALENERGIES
procurará notificar os Usuários das demandas legais referentes aos seus Dados
Pessoais, salvo se proibido por lei ou mandado judicial<span style='letter-spacing:
-.6pt'> </span>ou<span style='letter-spacing:-.55pt'> </span>se<span
style='letter-spacing:-.5pt'> </span>a<span style='letter-spacing:-.55pt'> </span>requisição<span
style='letter-spacing:-.45pt'> </span>for<span style='letter-spacing:-.5pt'> </span>emergencial.<span
style='letter-spacing:-.6pt'> </span>A<span style='letter-spacing:-.55pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.55pt'> </span>poderá,<span style='letter-spacing:-.5pt'>
</span>com<span style='letter-spacing:-.45pt'> </span>base<span
style='letter-spacing:-.65pt'> </span>em<span style='letter-spacing:-.45pt'> </span>seus<span
style='letter-spacing:-.55pt'> </span>princípios,<span style='letter-spacing:
-.55pt'> </span>contestar tais demandas se julgar, a seu critério, que tais
requisições são excessivas, vagas ou feitas por autoridades incompetentes,
todavia não se compromete a impugnar todas as<span style='letter-spacing:-.4pt'>
</span>demandas.</span></p>

<p class=MsoBodyText style='margin-top:.2pt'><span lang=PT style='font-size:
11.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:5.95pt;margin-bottom:.0001pt;text-align:justify'><span lang=PT>Ressalvadas<span
style='letter-spacing:-.45pt'> </span>as<span style='letter-spacing:-.4pt'> </span>previsões<span
style='letter-spacing:-.5pt'> </span>constantes<span style='letter-spacing:
-.45pt'> </span>nesta<span style='letter-spacing:-.5pt'> </span>Política,<span
style='letter-spacing:-.4pt'> </span>a<span style='letter-spacing:-.45pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.45pt'> </span>não<span style='letter-spacing:-.35pt'> </span>compartilha<span
style='letter-spacing:-.4pt'> </span>os<span style='letter-spacing:-.45pt'> </span>Dados<span
style='letter-spacing:-.4pt'> </span>Pessoais<span style='letter-spacing:-.4pt'>
</span>dos Usuários<span style='letter-spacing:-.4pt'> </span>com<span
style='letter-spacing:-.35pt'> </span>terceiros,<span style='letter-spacing:
-.4pt'> </span>a<span style='letter-spacing:-.4pt'> </span>menos<span
style='letter-spacing:-.4pt'> </span>que<span style='letter-spacing:-.35pt'> </span>tenhamos<span
style='letter-spacing:-.35pt'> </span>obtido<span style='letter-spacing:-.35pt'>
</span>a<span style='letter-spacing:-.4pt'> </span>sua<span style='letter-spacing:
-.45pt'> </span>permissão<span style='letter-spacing:-.5pt'> </span>ou<span
style='letter-spacing:-.35pt'> </span>que<span style='letter-spacing:-.35pt'> </span>haja<span
style='letter-spacing:-.35pt'> </span>uma<span style='letter-spacing:-.4pt'> </span>obrigação
baseada em<span style='letter-spacing:-.05pt'> </span>lei.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<h1 style='text-indent:-28.95pt'><span lang=PT style='letter-spacing:-.45pt'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>TRANSFERENCIA INTERNACIONAL DE DADOS<span
style='letter-spacing:-.3pt'> </span>PESSOAIS</span></h1>

<p class=MsoBodyText style='margin-top:.05pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.9pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A<span style='letter-spacing:-.4pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.45pt'> </span>poderá<span style='letter-spacing:-.35pt'>
</span>transferir<span style='letter-spacing:-.65pt'> </span>os<span
style='letter-spacing:-.45pt'> </span>Dados<span style='letter-spacing:-.5pt'> </span>Pessoais<span
style='letter-spacing:-.4pt'> </span>dos<span style='letter-spacing:-.45pt'> </span>Usuários<span
style='letter-spacing:-.25pt'> </span>para<span style='letter-spacing:-.4pt'> </span>fora<span
style='letter-spacing:-.4pt'> </span>do<span style='letter-spacing:-.45pt'> </span>Brasil,<span
style='letter-spacing:-.5pt'> </span>mais<span style='letter-spacing:-.4pt'> </span>precisamente,
nos<span style='letter-spacing:-.6pt'> </span>Estados<span style='letter-spacing:
-.55pt'> </span>Unidos<span style='letter-spacing:-.55pt'> </span>da<span
style='letter-spacing:-.7pt'> </span>América<span style='letter-spacing:-.6pt'>
</span>(EUA)<span style='letter-spacing:-.7pt'> </span>em<span
style='letter-spacing:-.65pt'> </span>razão<span style='letter-spacing:-.5pt'> </span>de<span
style='letter-spacing:-.65pt'> </span>armazenamento<span style='letter-spacing:
-.65pt'> </span>em<span style='letter-spacing:-.55pt'> </span><i>cloud<span
style='letter-spacing:-.65pt'> </span>computing</i>,<span style='letter-spacing:
-.55pt'> </span>também conhecido como computação em<span style='letter-spacing:
.05pt'> </span>nuvem.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A<span style='letter-spacing:-.7pt'> </span>transferência<span
style='letter-spacing:-.75pt'> </span>internacional<span style='letter-spacing:
-.65pt'> </span>de<span style='letter-spacing:-.8pt'> </span>Dados<span
style='letter-spacing:-.75pt'> </span>Pessoais,<span style='letter-spacing:
-.65pt'> </span>podem<span style='letter-spacing:-.65pt'> </span>incluir<span
style='letter-spacing:-.7pt'> </span>leis<span style='letter-spacing:-.65pt'> </span>de<span
style='letter-spacing:-.8pt'> </span>proteção<span style='letter-spacing:-.6pt'>
</span>de<span style='letter-spacing:-.65pt'> </span>Dados<span
style='letter-spacing:-.75pt'> </span>Pessoais que variam de um país para o
outro. Em tais casos, a TOTALENERGIES irá adotar as medidas necessárias para
assegurar a existência de garantias adequadas para a proteção dos Dados
Pessoais dos Usuários de acordo com com as leis de proteção de dados aplicáveis
e em observância<span style='letter-spacing:.5pt'> </span>às proteções
descritas na presente Política de Privacidade.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<h1 style='text-indent:-28.95pt'><span lang=PT style='letter-spacing:-.45pt'>5.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>BASE LEGAL PARA O TRATAMENTO DE DADOS<span
style='letter-spacing:-.5pt'> </span>PESSOAIS</span></h1>

<p class=MsoBodyText><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A TOTALENERGIES somente realiza o Tratamento dos Dados Pessoais dos
Usuários em correspondência com alguma das hipóteses legais estabelecidas pela
LGPD que autorizem a TOTALENERGIES a tratar Dados Pessoais.</span></p>

<p class=MsoBodyText style='margin-top:.5pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A<span style='letter-spacing:-.25pt'> </span>realização<span
style='letter-spacing:-.2pt'> </span>de<span style='letter-spacing:-.3pt'> </span>operações<span
style='letter-spacing:-.35pt'> </span>de<span style='letter-spacing:-.15pt'> </span>Tratamento<span
style='letter-spacing:-.25pt'> </span>de<span style='letter-spacing:-.25pt'> </span>Dados<span
style='letter-spacing:-.3pt'> </span>Pessoais<span style='letter-spacing:-.2pt'>
</span>pela<span style='letter-spacing:-.3pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.35pt'> </span>poderá<span style='letter-spacing:-.4pt'>
</span>ser<span style='letter-spacing:-.2pt'> </span>realizada<span
style='letter-spacing:-.15pt'> </span>nas seguintes hipóteses: (i) como parte
do desempenho e gestão do relacionamento contratual; (ii) para<span
style='letter-spacing:-.3pt'> </span>atender<span style='letter-spacing:-.25pt'>
</span>aos<span style='letter-spacing:-.3pt'> </span>legítimo<span
style='letter-spacing:-.2pt'> </span>interesses<span style='letter-spacing:
-.25pt'> </span>da<span style='letter-spacing:-.3pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.45pt'> </span>ou<span style='letter-spacing:-.3pt'> </span>de<span
style='letter-spacing:-.25pt'> </span>terceiros;<span style='letter-spacing:
-.35pt'> </span>(iii)<span style='letter-spacing:-.25pt'> </span>para<span
style='letter-spacing:-.3pt'> </span>o<span style='letter-spacing:-.35pt'> </span>cumprimento<span
style='letter-spacing:-.2pt'> </span>de<span style='letter-spacing:-.25pt'> </span>certas
obrigações legais ou regulatórias; (iv) quando for necessário para o exercício
regular de direitos em processo judicial, administrativo ou arbitral; (v)
mediamente o fornecimento prévio de consentimento dos<span style='letter-spacing:
-.2pt'> </span>Usuários.</span></p>

<p class=MsoBodyText style='margin-top:.15pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-left:48.1pt;text-indent:-35.05pt'><b><i><span
lang=PT style='letter-spacing:-.45pt'>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></i></b><b><span lang=PT>UTILIZAÇÃO DE<span style='letter-spacing:
-.2pt'> </span><i>COOKIES</i></span></b></p>

<p class=MsoBodyText style='margin-top:.1pt'><b><i><span lang=PT>&nbsp;</span></i></b></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:12.05pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A TOTALENERGIES pode obter Informações dos Usuários por meio de cookies
e tecnologias semelhantes, incluindo identificadores de dispositivos móveis,
para ajudar a reconhecer os Usuários que utilizam a Plataforma, conhecer seus
interesses dentro e fora da Plataforma, aperfeiçoar a experiência dos Usuários,
aumentar a segurança e medir a utilização e eficácia da Plataforma.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:13.05pt;text-align:justify'><b><span
lang=PT>O que são <i>cookies</i>?</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:12.2pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Os <i>cookies </i>são pequenos arquivos de texto que são armazenados na
memória do terminal dos Usuário. Eles armazenam certas informações (por
exemplo, idioma preferido ou configurações da Plataforma) que o aplicativo pode
(dependendo do tempo de vida do <i>cookie</i>) retransmitir à TOTALENERGIES na
próxima visita dos Usuários à Plataforma.<br>
<br>
</span></p>

<p class=MsoNormal style='margin-left:13.05pt;text-align:justify;line-height:
13.4pt'><b><span lang=PT>Para que servem os <i>cookies</i>?</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:12.0pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Os cookies desempenham diversas funções diferentes, tais como permitir
que os Usuários naveguem entre as áreas do aplicativo de maneira eficiente,
armazenar suas preferências e, em geral, melhorar sua experiência de
navegação.Eles também podem ajudar a personalizar os anúncios publicitários
exibidos durante a navegação e as atividades de marketing direcionadas aos
Usuários, garantindo que eles sejam enviados de acordo com seus interesses e
preferências.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoNormal style='margin-top:.05pt;margin-right:0cm;margin-bottom:0cm;
margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><b><span lang=PT>Quais
<i>cookies </i>utilizamos?</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:11.9pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A<span style='letter-spacing:-.6pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.6pt'> </span>diferencia<span style='letter-spacing:
-.6pt'> </span>duas<span style='letter-spacing:-.6pt'> </span>categorias<span
style='letter-spacing:-.55pt'> </span>de<span style='letter-spacing:-.6pt'> </span><i>cookies<span
style='letter-spacing:-.55pt'> </span></i>utilizados<span style='letter-spacing:
-.55pt'> </span>em:<span style='letter-spacing:-.55pt'> </span>(1)<span
style='letter-spacing:-.55pt'> </span><i>cookies<span style='letter-spacing:
-.55pt'> </span></i>funcionais,<span style='letter-spacing:-.55pt'> </span>sem<span
style='letter-spacing:-.5pt'> </span>os<span style='letter-spacing:-.55pt'> </span>quais
a funcionalidade da Plataforma seria reduzida, e (2) <i>cookies </i>opcionais,
utilizados para fins de <i>marketing </i>e análise do<span style='letter-spacing:
.05pt'> </span>Website.</span></p>

<p class=MsoBodyText style='margin-top:.4pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:11.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify;line-height:
111%'><span lang=PT>A tabela abaixo sintetiza o cookie funcional opcionais utilizado
no aplicativo, bem como os seu propósito e vida útil. </span></p>

<p class=MsoBodyText style='margin-top:.35pt;margin-right:0cm;margin-bottom:
.05pt;margin-left:0cm'><span lang=PT style='font-size:12.0pt'>&nbsp;</span></p>

<table class=TableNormal1 border=1 cellspacing=0 cellpadding=0 width=595
style='margin-left:13.8pt;border-collapse:collapse;border:none'>
<tr style='height:17.1pt'>
 <td width=595 colspan=2 valign=top style='width:446.4pt;border:solid black 1.0pt;
 padding:0cm 0cm 0cm 0cm;height:17.1pt'>
 <p class=TableParagraph style='line-height:9.95pt'><b><i><span lang=PT
 style='font-size:9.0pt'>COOKIES FUNCIONAIS</span></i></b></p>
 </td>
</tr>
<tr style='height:17.25pt'>
 <td width=464 valign=top style='width:347.8pt;border:solid black 1.0pt;
 border-top:none;padding:0cm 0cm 0cm 0cm;height:17.25pt'>
 <p class=TableParagraph style='line-height:10.05pt'><b><span lang=PT
 style='font-size:9.0pt'>Propósito</span></b></p>
 </td>
 <td width=131 valign=top style='width:98.6pt;border-top:none;border-left:
 none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
 padding:0cm 0cm 0cm 0cm;height:17.25pt'>
 <p class=TableParagraph style='line-height:10.05pt'><b><span lang=PT
 style='font-size:9.0pt'>Vida útil</span></b></p>
 </td>
</tr>
<tr style='height:79.9pt'>
 <td width=464 valign=top style='width:347.8pt;border:solid black 1.0pt;
 border-top:none;padding:0cm 0cm 0cm 0cm;height:79.9pt'>
 <p class=TableParagraph style='margin-top:5.2pt;text-align:justify'><b><span
 lang=PT style='font-size:9.0pt'>Manutenção de sessão</span></b></p>
 <p class=TableParagraph style='margin-top:5.95pt;margin-right:4.15pt;
 margin-bottom:0cm;margin-left:7.5pt;margin-bottom:.0001pt;text-align:justify;
 line-height:95%'><span lang=PT style='font-size:9.0pt;line-height:95%'>Esses <i>cookies
 </i>atribuem uma ID gerada aleatoriamente ao dispositivo dos Usuários,
 permitindo permitindo a identificação e correta transmissão das informações.</span></p>
 </td>
 <td width=131 valign=top style='width:98.6pt;border-top:none;border-left:
 none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
 padding:0cm 0cm 0cm 0cm;height:79.9pt'>
 <p class=TableParagraph style='margin-top:5.2pt'><span lang=PT
 style='font-size:9.0pt'>1 hora</span></p>
 </td>
</tr>
</table>

<p class=MsoBodyText style='margin-top:.4pt'><span lang=PT style='font-size:
7.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.5pt'><span lang=PT style='font-size:
7.5pt'>&nbsp;</span></p>

<h1 style='margin-top:2.8pt;margin-right:0cm;margin-bottom:0cm;margin-left:
32.6pt;margin-bottom:.0001pt;text-indent:-19.6pt'><span lang=PT
style='letter-spacing:-.45pt'>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>EXERCÍCIO DE DIREITOS DOS<span style='letter-spacing:
-.2pt'> </span>USUÁRIOS</span></h1>

<p class=MsoBodyText style='margin-top:.15pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-left:13.05pt'><span lang=PT>Os seguintes
direitos estão disponíveis para os Usuários exercê-los de acordo com as leis de
privacidade de dados aplicáveis.São eles:</span></p>

<p class=MsoBodyText style='margin-top:.25pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-top:.05pt;margin-right:5.85pt;
margin-bottom:0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-indent:0cm'><span
lang=PT style='letter-spacing:-.05pt'>a.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Confirmação da existência de Tratamento de Dados
Pessoais: </span></b><span lang=PT>Direito deconfirmar se a TOTALENERGIES
realiza o Tratamento dos seus Dados<span style='letter-spacing:-.45pt'> </span>Pessoais;</span></p>

<p class=MsoBodyText style='margin-top:.5pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-top:.05pt;margin-right:5.75pt;
margin-bottom:0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-indent:0cm'><span
lang=PT style='letter-spacing:-.05pt'>b.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Acesso aos Dados Pessoais: </span></b><span
lang=PT>Direito de solicitar o acesso aos seus Dados Pessoais coletados e que
estejam armazenados pela<span style='letter-spacing:.1pt'> </span>TOTALENERGIES;</span></p>

<p class=MsoBodyText style='margin-top:.15pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:11.95pt;text-indent:0cm'><span
lang=PT style='letter-spacing:-.05pt'>c.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Correção<span style='letter-spacing:-.75pt'> </span>de<span
style='letter-spacing:-.75pt'> </span>dados<span style='letter-spacing:-.65pt'>
</span>incompletos,<span style='letter-spacing:-.65pt'> </span>inexatos<span
style='letter-spacing:-.65pt'> </span>ou<span style='letter-spacing:-.75pt'> </span>desatualizados:<span
style='letter-spacing:-.5pt'> </span></span></b><span lang=PT>Direito<span
style='letter-spacing:-.65pt'> </span>de<span style='letter-spacing:-.65pt'> </span>solicitar<span
style='letter-spacing:-.7pt'> </span>a<span style='letter-spacing:-.8pt'> </span>correção
de dados incompletos, inexatos ou<span style='letter-spacing:-.1pt'> </span>desatualizados;</span></p>

<p class=MsoBodyText style='margin-top:.15pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:11.9pt;text-indent:0cm'><span
lang=PT style='letter-spacing:-.05pt'>d.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Anonimização, bloqueio ou eliminação: </span></b><span
lang=PT>Direito de solicitar a anonimização, bloqueio ou eliminação de dados
desnecessários, excessivos ou tratados em desconformidade com a<span
style='letter-spacing:-1.45pt'> </span>LGPD;</span></p>

<p class=MsoBodyText style='margin-top:.25pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:11.9pt;text-indent:0cm'><span
lang=PT style='letter-spacing:-.05pt'>e.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Oposição: </span></b><span lang=PT>Direito de se
opor a Tratamento realizado com fundamento em uma das hipóteses de dispensa de
consentimento, em caso de descumprimento ao disposto na<span style='letter-spacing:
-1.15pt'> </span>LGPD;</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT style='font-size:
11.5pt'>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:5.75pt;text-align:justify;
text-indent:0cm'><span lang=PT style='letter-spacing:-.05pt'>f.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Portabilidade dos Dados Pessoais: </span></b><span
lang=PT>Direito à portabilidade dos Dados Pessoais a outro fornecedor de
serviço ou produto, mediante requisição expressa, de acordo com a
regulamentação da Autoridade Nacional de Proteção de Dados (ANPD), observados
os segredos comercial<span style='letter-spacing:.35pt'> </span>e<span
style='letter-spacing:.6pt'> </span>industrial.<span style='letter-spacing:
.5pt'> </span>A<span style='letter-spacing:.55pt'> </span>portabilidade<span
style='letter-spacing:.6pt'> </span>dos<span style='letter-spacing:.55pt'> </span>Dados<span
style='letter-spacing:.45pt'> </span>Pessoais<span style='letter-spacing:.45pt'>
</span>não<span style='letter-spacing:.6pt'> </span>inclui<span
style='letter-spacing:.55pt'> </span>dados<span style='letter-spacing:.55pt'> </span>que<span
style='letter-spacing:.6pt'> </span>já<span style='letter-spacing:.55pt'> </span>tenham<span
style='letter-spacing:.55pt'> </span>sido</span></p>

<p class=MsoBodyText style='margin-top:1.95pt;margin-right:0cm;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>anonimizados pela TOTALENERGIES;</span></p>

<p class=MsoBodyText style='margin-top:.45pt'><span lang=PT style='font-size:
11.5pt'>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:5.95pt;text-align:justify;
text-indent:0cm;line-height:98%'><span lang=PT style='letter-spacing:-.05pt'>g.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span
lang=PT>Eliminação dos Dados Pessoais tratados com o consentimento: </span></b><span
lang=PT>Direito de solicitar a eliminação dos Dados Pessoais tratados com base
no seu<span style='letter-spacing:-.65pt'> </span>consentimento;</span></p>

<p class=MsoBodyText style='margin-top:.45pt'><span lang=PT style='font-size:
11.5pt'>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:5.9pt;text-align:justify;
text-indent:0cm'><span lang=PT style='letter-spacing:-.05pt'>h.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b><span
lang=PT>Informações<span style='letter-spacing:-.7pt'> </span>sobre<span
style='letter-spacing:-.6pt'> </span>uso<span style='letter-spacing:-.65pt'> </span>compartilhado<span
style='letter-spacing:-.55pt'> </span>dos<span style='letter-spacing:-.55pt'> </span>Dados<span
style='letter-spacing:-.6pt'> </span>Pessoais:<span style='letter-spacing:-.75pt'>
</span></span></b><span lang=PT>Direito<span style='letter-spacing:-.55pt'> </span>de<span
style='letter-spacing:-.55pt'> </span>requerer<span style='letter-spacing:-.6pt'>
</span>informações sobre as entidades públicas e privadas com as quais a TOTALENERGIES
tenha compartilhado os seus Dados Pessoais;</span></p>

<p class=MsoBodyText style='margin-top:.4pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:5.7pt;text-align:justify;
text-indent:0cm'><span lang=PT style='letter-spacing:-.05pt'>i.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT style='font-size:10.0pt;font-family:"Arial",sans-serif'>Não
fornecer consentimento e as negativas: </span></b><span lang=PT>Direito de
requerer informações sobre a possibilidade de não fornecer consentimento e as
consequências dessa<span style='letter-spacing:-.3pt'> </span>negativa;</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoListParagraph style='margin-right:5.8pt;text-align:justify;
text-indent:0cm'><span lang=PT style='letter-spacing:-.05pt'>j.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b><span lang=PT>Revogação do consentimento: </span></b><span
lang=PT>Direito de requerer a revogação do seu consentimento, a qualquer
momento, mediante manifestação expressa, sendo ratificados todos os Tratamentos
realizados sob amparo do consentimento anteriormente<span style='letter-spacing:
-.25pt'> </span>manifestado;</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:12.4pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Para o exercício de qualquer um dos direitos acima previstos, tais
solicitações deverão ser realizadas através do seguinte endereço de e-mail: <a
href="mailto:dpo@agenciamolla.com.br">dpo@agenciamolla.com.br</a></span></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:11.85pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Sua<span style='letter-spacing:-.4pt'> </span>solicitação<span
style='letter-spacing:-.45pt'> </span>será<span style='letter-spacing:-.5pt'> </span>analisada<span
style='letter-spacing:-.4pt'> </span>pelos<span style='letter-spacing:-.4pt'> </span>responsáveis<span
style='letter-spacing:-.4pt'> </span>pela<span style='letter-spacing:-.45pt'> </span>privacidade<span
style='letter-spacing:-.5pt'> </span>e<span style='letter-spacing:-.35pt'> </span>proteção<span
style='letter-spacing:-.35pt'> </span>de<span style='letter-spacing:-.6pt'> </span>Dados<span
style='letter-spacing:-.5pt'> </span>Pessoais da TOTALENERGIES. Na hipótese de
impossibilidade de atendimento destas solicitações, a TOTALENERGIES apresentará<span
style='letter-spacing:-.4pt'> </span>a<span style='letter-spacing:-.3pt'> </span>devida<span
style='letter-spacing:-.4pt'> </span>justificativa.<span style='letter-spacing:
-.45pt'> </span>Como<span style='letter-spacing:-.35pt'> </span>medida<span
style='letter-spacing:-.4pt'> </span>de<span style='letter-spacing:-.35pt'> </span>segurança<span
style='letter-spacing:-.25pt'> </span>e<span style='letter-spacing:-.25pt'> </span>para<span
style='letter-spacing:-.45pt'> </span>garantir<span style='letter-spacing:-.4pt'>
</span>a<span style='letter-spacing:-.3pt'> </span>sua<span style='letter-spacing:
-.3pt'> </span>privacidade, a TOTALENERGIES poderá solicitar a comprovação da
sua identidade antes de efetivarmos os seus direitos.Salvo nos casos previstos
nesta Política de Privacidade, na exclusão dos cadastros as informações a
respeito dos Usuários geralmente são retiradas da<span style='letter-spacing:
-1.4pt'> </span>Plataforma.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:.2pt'><span lang=PT>&nbsp;</span></p>

<h1 style='margin-top:.05pt;text-align:justify;text-indent:-28.95pt'><span
lang=PT style='letter-spacing:-.45pt'>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>DADOS PESSOAIS<span style='letter-spacing:-.05pt'> </span>SENSÍVEIS</span></h1>

<p class=MsoBodyText><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.8pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A TOTALENERGIES não realiza o Tratamento de Dados Pessoais definidos
como sensíveis, entendido como aqueles relacionados a origem racial ou étnica,
convicção religiosa, opinião política, filiação a sindicato ou a organização de
caráter religioso, filosófico ou político, dados de saúde ou dados relativos à
orientação sexual, dado genético ou biométrico, quando vinculado a uma pessoa
natural.</span></p>

<p class=MsoBodyText><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Caso seja estritamente necessário coletar tais dados para atingir a
finalidade para a qual o Tratamento<span style='letter-spacing:-.5pt'> </span>é<span
style='letter-spacing:-.6pt'> </span>realizado,<span style='letter-spacing:
-.7pt'> </span>solicitaremos<span style='letter-spacing:-.5pt'> </span>ao<span
style='letter-spacing:-.65pt'> </span>Usuário<span style='letter-spacing:-.45pt'>
</span>o<span style='letter-spacing:-.65pt'> </span>seu<span style='letter-spacing:
-.65pt'> </span>prévio<span style='letter-spacing:-.5pt'> </span>consentimento<span
style='letter-spacing:-.4pt'> </span>de<span style='letter-spacing:-.65pt'> </span>forma<span
style='letter-spacing:-.55pt'> </span>específica e destacada, para finalidades
específicas e sob as condições descritas nesta<span style='letter-spacing:-.4pt'>
</span>Política.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<h1 style='text-align:justify;text-indent:-28.95pt'><span lang=PT
style='letter-spacing:-.45pt'>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>PERÍODO DE RETENÇÃO DOS DADOS<span
style='letter-spacing:-.25pt'> </span>PESSOAIS</span></h1>

<p class=MsoBodyText style='margin-top:.5pt'><b><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.8pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A TOTALENERGIES reterá os Dados Pessoais dos Usuários somente pelo
tempo necessário para o cumprimento das finalidades para os quais foram
coletados, incluindo os propósitos descritos nesta Política de Privacidade, ou
por um período especificamente exigido ou permitido pela legislação ou pela
regulamentação aplicáveis.</span></p>

<p class=MsoBodyText style='margin-top:.1pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:6.2pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Findo o prazo e a necessidade legal, os Dados Pessoais serão excluídos
com uso de métodos de descarte seguro, ou utilizados de forma anonimizada para
fins estatísticos.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<h1 style='margin-top:3.35pt;text-indent:-28.95pt'><span lang=PT
style='letter-spacing:-.45pt'>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>SEGURANÇA DOS DADOS<span style='letter-spacing:
-.3pt'> </span>PESSOAIS</span></h1>

<p class=MsoBodyText style='margin-top:.05pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A TOTALENERGIES adota medidas de segurança, técnicas e administrativas
aptas a proteger os Dados Pessoais dos Usuários de acessos não autorizados e de
situações acidentais ou ilícitas de destruição, perda, alteração, comunicação
ou qualquer forma de Tratamento inadequado ou ilícito de acordo com o disposto
na LGPD.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.8pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Como parte das referidas precauções, a TOTALENERGIES criptografa as
senhas dos Usuários e os procedimentos de segurança da TOTALENERGIES são
constantemente revisados com base nos novos avanços<span style='letter-spacing:
-.2pt'> </span>tecnológicos.<span style='letter-spacing:-.2pt'> </span>No<span
style='letter-spacing:-.2pt'> </span>entanto,<span style='letter-spacing:-.25pt'>
</span>esteja<span style='letter-spacing:-.15pt'> </span>ciente<span
style='letter-spacing:-.15pt'> </span>que<span style='letter-spacing:-.15pt'> </span>nenhuma<span
style='letter-spacing:-.15pt'> </span>empresa,<span style='letter-spacing:-.15pt'>
</span>incluindo<span style='letter-spacing:-.1pt'> </span>a<span
style='letter-spacing:-.15pt'> </span>TOTALENERGIES,<span style='letter-spacing:
-.15pt'> </span>pode eliminar totalmente os riscos de segurança associados ao
Tratamento de Dados<span style='letter-spacing:-1.05pt'> </span>Pessoais.</span></p>

<p class=MsoBodyText style='margin-top:.1pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Para nos ajudar a proteger os Dados Pessoais, a TOTALENERGIES recomenda
que os Usuários protejam-se do acesso não autorizado à sua senha e nunca
revelem ou compartilhem a sua senha com terceiros, pois seu acesso é de uso
pessoal e intransferível, sendo de responsabilidade dos Usuários<span
style='letter-spacing:-.55pt'> </span>manter<span style='letter-spacing:-.5pt'>
</span>a<span style='letter-spacing:-.4pt'> </span>guarda,<span
style='letter-spacing:-.4pt'> </span>sigilo<span style='letter-spacing:-.35pt'>
</span>e<span style='letter-spacing:-.35pt'> </span>a<span style='letter-spacing:
-.4pt'> </span>confidencialidade<span style='letter-spacing:-.5pt'> </span>de<span
style='letter-spacing:-.4pt'> </span>sua<span style='letter-spacing:-.45pt'> </span>senha.<span
style='letter-spacing:-.45pt'> </span>Havendo<span style='letter-spacing:-.35pt'>
</span>tentativa<span style='letter-spacing:-.35pt'> </span>de<span
style='letter-spacing:-.35pt'> </span>acesso indevido ou não autorizado, Você
deverá comunicar a TOTALENERGIES o mais rápido<span style='letter-spacing:-.85pt'>
</span>possível.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<h1 style='text-indent:-28.95pt'><span lang=PT style='letter-spacing:-.45pt'>11.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>ALTERAÇÕES DA NOSSA POLÍTICA DE<span
style='letter-spacing:-.2pt'> </span>PRIVACIDADE</span></h1>

<p class=MsoBodyText><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:.05pt;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A TOTALENERGIES reserva o direito de alterar o teor desta Política de
Privacidade a qualquer momento. Caso ocorra qualquer alteração na presente
Política, publicaremos a nova versão, a qual indicará no início a data em que
se deu a revisão para que os Usuários possam estar cientes do conteúdo
atualizado.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.65pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Todas as modificações entrarão em vigor imediatamente após a publicação
da Política de Privacidade revisada em nosso aplicativo, a menos que
especificado de outra forma. Neste caso, a TOTALENERGIES<span style='letter-spacing:
-.6pt'> </span>recomenda<span style='letter-spacing:-.6pt'> </span>que<span
style='letter-spacing:-.5pt'> </span>os<span style='letter-spacing:-.55pt'> </span>Usuários<span
style='letter-spacing:-.5pt'> </span>consultem<span style='letter-spacing:-.5pt'>
</span>periodicamente<span style='letter-spacing:-.55pt'> </span>esta<span
style='letter-spacing:-.5pt'> </span>Política,<span style='letter-spacing:-.55pt'>
</span>a<span style='letter-spacing:-.6pt'> </span>fim<span style='letter-spacing:
-.6pt'> </span>de<span style='letter-spacing:-.55pt'> </span>estar<span
style='letter-spacing:-.55pt'> </span>sempre ciente das respectivas<span
style='letter-spacing:-.2pt'> </span>alterações.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.9pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Caso<span style='letter-spacing:-.65pt'> </span>os<span
style='letter-spacing:-.5pt'> </span>Usuários<span style='letter-spacing:-.5pt'>
</span>não<span style='letter-spacing:-.5pt'> </span>concordem<span
style='letter-spacing:-.45pt'> </span>com<span style='letter-spacing:-.45pt'> </span>as<span
style='letter-spacing:-.55pt'> </span>alterações<span style='letter-spacing:
-.55pt'> </span>realizadas<span style='letter-spacing:-.55pt'> </span>e<span
style='letter-spacing:-.5pt'> </span>os<span style='letter-spacing:-.65pt'> </span>novos<span
style='letter-spacing:-.65pt'> </span>termos<span style='letter-spacing:-.55pt'>
</span>da<span style='letter-spacing:-.55pt'> </span>nossa<span
style='letter-spacing:-.65pt'> </span>Política de Privacidade, solicitamos que
seja interrompido imediatamente o uso e acesso da<span style='letter-spacing:
-1.25pt'> </span>Plataforma.</span></p>

<p class=MsoBodyText style='margin-top:.05pt'><span lang=PT>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>A data da última atualização desta Política é indicada no início e
reflete a data efetiva dessa Política.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<h1 style='margin-left:77.95pt;text-indent:-64.95pt'><span lang=PT
style='letter-spacing:-.45pt'>12.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>TRATAMENTO DE DADOS PESSOAIS DE CRIANÇAS E<span
style='letter-spacing:-.5pt'> </span>ADOLESCENTES</span></h1>

<p class=MsoBodyText style='margin-top:.05pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.75pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Considerando a importância de proteger a privacidade de crianças e
adolescentes, a TOTALENERGIES não coleta, processa ou utiliza em sua plataforma
Dados Pessoais relacionado a um indivíduo que saiba ter menos de 18 (dezoito)
anos de idade. Para utilizar e/ou acessar a Plataforma os Usuários devem:<span
style='letter-spacing:-.3pt'> </span>(i)<span style='letter-spacing:-.3pt'> </span>se<span
style='letter-spacing:-.25pt'> </span>pessoas<span style='letter-spacing:-.3pt'>
</span>físicas,<span style='letter-spacing:-.15pt'> </span>ter<span
style='letter-spacing:-.3pt'> </span>a<span style='letter-spacing:-.15pt'> </span>idade<span
style='letter-spacing:-.25pt'> </span>mínima<span style='letter-spacing:-.3pt'>
</span>de<span style='letter-spacing:-.25pt'> </span>18<span style='letter-spacing:
-.25pt'> </span>(dezoito)<span style='letter-spacing:-.25pt'> </span>anos;<span
style='letter-spacing:-.15pt'> </span>(ii)<span style='letter-spacing:-.35pt'> </span>se<span
style='letter-spacing:-.25pt'> </span>pessoas<span style='letter-spacing:-.15pt'>
</span>jurídicas,<span style='letter-spacing:-.3pt'> </span>ser efetuado<span
style='letter-spacing:-.25pt'> </span>na<span style='letter-spacing:-.3pt'> </span>pessoa<span
style='letter-spacing:-.3pt'> </span>do<span style='letter-spacing:-.2pt'> </span>representante<span
style='letter-spacing:-.3pt'> </span>legal;<span style='letter-spacing:-.4pt'> </span>e<span
style='letter-spacing:-.25pt'> </span>(iii)<span style='letter-spacing:-.25pt'>
</span>ser<span style='letter-spacing:-.25pt'> </span>juridicamente<span
style='letter-spacing:-.3pt'> </span>capaz,<span style='letter-spacing:-.25pt'>
</span>conforme<span style='letter-spacing:-.25pt'> </span>previsto<span
style='letter-spacing:-.2pt'> </span><span style='letter-spacing:-.1pt'>nos </span>Termos
e Condições de<span style='letter-spacing:.05pt'> </span>Uso.</span></p>

<p class=MsoBodyText style='margin-top:.55pt'><span lang=PT style='font-size:
10.5pt'>&nbsp;</span></p>

<h1 style='margin-left:77.95pt;text-indent:-64.95pt'><span lang=PT
style='letter-spacing:-.45pt'>13.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=PT>ENTRE EM CONTATO COM A<span style='letter-spacing:
-.35pt'> </span>TOTALENERGIES</span></h1>

<p class=MsoBodyText style='margin-top:.05pt'><b><span lang=PT>&nbsp;</span></b></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
lang=PT>Os<span style='letter-spacing:-.45pt'> </span>Usuários<span
style='letter-spacing:-.45pt'> </span>podem<span style='letter-spacing:-.5pt'> </span>contatar<span
style='letter-spacing:-.4pt'> </span>a<span style='letter-spacing:-.45pt'> </span>TOTALENERGIES<span
style='letter-spacing:-.5pt'> </span>diretamente<span style='letter-spacing:
-.55pt'> </span>através<span style='letter-spacing:-.5pt'> </span>dos<span
style='letter-spacing:-.55pt'> </span>formulários<span style='letter-spacing:
-.45pt'> </span>de<span style='letter-spacing:-.4pt'> </span>contato<span
style='letter-spacing:-.35pt'> </span>disponíveis na<span style='letter-spacing:
-.4pt'> </span>Plataforma.<span style='letter-spacing:-.45pt'> </span>Além<span
style='letter-spacing:-.35pt'> </span>disso,<span style='letter-spacing:1.7pt'>
</span>em<span style='letter-spacing:-.45pt'> </span>caso<span
style='letter-spacing:-.45pt'> </span>de<span style='letter-spacing:-.4pt'> </span>alguma<span
style='letter-spacing:-.35pt'> </span>dúvida<span style='letter-spacing:-.55pt'>
</span>sobre<span style='letter-spacing:-.5pt'> </span>esta<span
style='letter-spacing:-.5pt'> </span>Política<span style='letter-spacing:-.4pt'>
</span>de<span style='letter-spacing:-.35pt'> </span>Privacidade<span
style='letter-spacing:-.3pt'> </span>ou<span style='letter-spacing:-.45pt'> </span>sobre
nossas práticas em relação a privacidade, entre em contato com o nosso
Encarregado de Proteção de Dados Pessoais através do seguinte endereço de
e-mail:<span style='letter-spacing:-.45pt'> </span><a
href="mailto:dpo@agenciamolla.com.br">dpo@agenciamolla.com.br</a><span
class=MsoHyperlink>.</span></span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>TERMOS DE USO</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>IMPORTANTE: LEIA
ATENTAMENTE ESTES TERMOS DE USO ANTES DE UTILIZAR O APLICATIVO.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>Estes Termos de Uso
(&quot;Termos&quot;) regem o uso do aplicativo (&quot;Clube Pro +&quot;)
desenvolvido com o objetivo de facilitar o relacionamento entre a indústria e
os pontos de venda atendidos por seus distribuidores, permitindo aos usuários
digitalizar QR Codes dos produtos participantes para converter em pontos. Ao
utilizar o Aplicativo, você concorda com estes Termos e se compromete a
segui-los. Se você não concorda com estes Termos, por favor, não utilize o
Aplicativo.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>1. ACEITAÇÃO DOS
TERMOS</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>1.1. Estes Termos
constituem um contrato legalmente vinculativo entre você (doravante
&quot;Usuário&quot; ou &quot;Você&quot;) e a empresa desenvolvedora do
Aplicativo (doravante &quot;Desenvolvedora&quot; ou &quot;Nós&quot;). Ao
acessar ou utilizar o Aplicativo, você concorda com estes Termos e com nossa
Política de Privacidade.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>2. USO DO
APLICATIVO</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>2.1. O Aplicativo
permite que você escaneie Qr Codes nas embalagens dos produtos TotalEnergies
participantes e os converta em pontos, como parte de um programa de fidelidade
ou incentivo oferecido pela indústria TotalEnergies<b> </b>e seus
distribuidores.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>2.2. Você concorda
em utilizar o Aplicativo de acordo com todas as leis, regulamentos e normas
aplicáveis. Você é responsável por garantir que seu uso do Aplicativo esteja em
conformidade com todas as leis e regulamentos locais.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>3. CADASTRO E
INFORMAÇÕES DA CONTA</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>3.1. Para utilizar
o Aplicativo, você pode ser obrigado a criar uma conta e fornecer informações
pessoais, como nome, endereço de e-mail e outras informações de contato. Você
concorda em fornecer informações precisas e atualizadas e em mantê-las atualizadas.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>3.2. A
Desenvolvedora respeita sua privacidade e protegerá suas informações pessoais
de acordo com nossa Política de Privacidade. Ao utilizar o Aplicativo, você
concorda com a coleta, uso e divulgação de suas informações pessoais de acordo
com essa política.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>4. PONTOS E
RECOMPENSAS</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>4.1. O Aplicativo
permite que você acumule pontos ao digitalizar os Qr Codes dos produtos participantes.
A quantidade de pontos acumulados e quaisquer recompensas associadas a esses
pontos serão determinadas pela indústria e/ou distribuidores, e a
Desenvolvedora não assume responsabilidade por essas decisões.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>4.2. Você entende
que os pontos acumulados têm valor monetário e só podem ser resgatados de
acordo com as regras e políticas estabelecidas pela indústria e/ou
distribuidores.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>5.
RESPONSABILIDADES</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>5.1. A
Desenvolvedora não é responsável por quaisquer disputas, reclamações ou
problemas relacionados às recompensas, produtos ou serviços oferecidos pelos distribuidores
ou pela indústria.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>5.2. O Aplicativo é
fornecido &quot;no estado em que se encontra&quot;, e a Desenvolvedora não
oferece garantias de qualquer tipo, expressas ou implícitas, incluindo
garantias de comercialização, adequação a um fim específico ou não violação.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>6. MODIFICAÇÕES E
ENCERRAMENTO</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>6.1. A
Desenvolvedora reserva-se o direito de modificar ou encerrar o Aplicativo a
qualquer momento, com ou sem aviso prévio. Você concorda que a Desenvolvedora
não será responsável por qualquer modificação ou encerramento do Aplicativo.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>7. DISPOSIÇÕES
GERAIS</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>7.1. Estes Termos
constituem o acordo completo entre você e a Desenvolvedora em relação ao
Aplicativo e substituem todos os acordos anteriores.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>7.2. Se qualquer
disposição destes Termos for considerada inválida ou inexequível por um
tribunal de jurisdição competente, as demais disposições permanecerão em pleno
vigor e efeito.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>7.3. Estes Termos
serão regidos e interpretados de acordo com as leis do Brasil.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>CONTATO</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>Se você tiver
alguma dúvida ou preocupação sobre estes Termos, entre em contato conosco em <a
href="mailto:contato@clubepromais.com.br" target="_blank"
title="mailto:contato@clubepromais.com.br">contato@clubepromais.com.br</a><b>.</b></span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT>Estes Termos de Uso
foram atualizados pela última vez em 17/11/2023.</span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

<p class=MsoNormal align=center style='text-align:center'><b><span lang=PT
style='font-size:14.0pt;font-family:"Times New Roman",serif'>REGULAMENTO</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span lang=PT
style='font-size:14.0pt;font-family:"Times New Roman",serif'>PROGRAMA DE FIDELIDADE
</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span lang=PT
style='font-size:14.0pt;font-family:"Times New Roman",serif'>CLUBE PRO+ [DONO
PDV]</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>O programa de FIDELIDADE CLUBE PRO+, é instituído pela
<b>TOTALENERGIES</b> DISTRIBUIDORA BRASIL&nbsp;LTDA, sociedade empresária
inscrita no CNPJ sob o n. 71.770.689/0001-81, com sede na Avenida Tobias
Salgado, n. 45, Distrito Industrial, Pindamonhangaba/SP, CEP: 12.412-770 e sua
filial escritório para o recebimento de notificações inscrita no CNPJ sob o n.
71.770.689/0003-43, situada na Rua Fidêncio Ramos, nº 302, 3º andar, Torre B,
Vila Olímpia, São Paulo/SP, CEP: 04551-010, neste regulamento devidamente
representada na forma de seu Contrato Social, (“<b>TOTALENERGIES</b>”).</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-size:
12.0pt;font-family:"Calibri Light",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>I. DEFINIÇÕES</span></b><span
lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>1.1. Para os fins deste Regulamento são considerados,
no singular ou no plural, os termos abaixo iniciados por letras maiúsculas, de
forma que sempre que aparecerem neste Regulamento terão os significados
atribuídos abaixo: </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Aplicativo</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: aplicativo de celular atrelado ao
Programa Clube PRO+ no qual os Beneficiários poderão gerenciar e conduzir sua
participação no Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>PDV</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: Pontos de Venda de que atuam no
segmento automotivo com revenda de produtos TotalEnergies e troca de óleo: auto
centers, oficinas, etc).</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Beneficiários</span></b><span
lang=PT style='font-family:"Times New Roman",serif'>: pessoas jurídicas e/ou
pessoas físicas que adquirem Produtos TOTALENERGIES elegíveis no Programa nos
Distribuidores autorizados da rede, e se cadastram na Plataforma Clube PRO+, e
que fazem jus aos prêmios deste Programa nos termos deste Regulamento. Para
fins deste Regulamento, não poderão figurar como Beneficiários os colaboradores
do Grupo TOTALENERGIES. Quando pessoas jurídicas, os Beneficiários deverão
estar necessariamente vinculados a uma pessoa física, esta que gozará dos
direitos atribuídos à pessoa jurídica conforme este Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Bipador</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: pessoas físicas vinculada a um
PDV (pessoa jurídica). Este usuário terá papel exclusivo na ação de escaner/registro
dos QR na plataforma do Programa. Este indivíduo não será elegível ao acúmulo
ou resgate dos prêmios da plataforma Clube PRO+, exceto nas situações que ele
seja o pessoa responsável pelo próprio PDV (pessoa jurídica).</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Canais de Atendimento Clube PRO+</span></b><span
lang=PT style='font-family:"Times New Roman",serif'>: central de atendimento aos
usuários do programa Clube PRO+ por meio de atendimento online e telefônico, habilitada
ao esclarecimento de dúvidas quanto ao Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Produtos Elegíveis:</span></b><span
lang=PT style='font-family:"Times New Roman",serif'> Lista de Produtos TOTALENERGIES
participantes deste programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Resgate</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: benefício concedido aos
Beneficiários de acordo com suas respectivas compras de produtos elegíveis e escaner
dos QR codes na plataforma Clube PRO+. Fica já estabelecido que os resgates
acontecem via plataforma TOTALENERGIES através de transferência bancária via
PIX.</span></p>

<p class=MsoNormal style='text-align:justify'><a name="_Hlk147471479"><b><span
lang=PT style='font-family:"Times New Roman",serif'>Pontos:</span></b></a><span
lang=PT style='font-family:"Times New Roman",serif'> é unidade de peso
atribuída aos produtos participantes da campanha. Uma vez acumulados, os Pontos
serão convertidos em moeda monetária (R$) e ficarão disponíveis para resgates
conforme as regras do Programa.</span><span lang=PT style='font-family:"Times New Roman",serif'>
Os (pontos) terão validade de 12 meses (doze) meses contados a partir da data do
escâner do código.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>QR Code:</span></b><span lang=PT
style='font-family:"Times New Roman",serif'> Código de leitura aplicado nas embalagens
de produtos TOTALENERGIES elegíveis a este programa. Será através do
escaneamento/registro deste QR code que os pontos serão gerados e (poderão ser)
convertidos em prêmios.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Chave PIX: </span></b><span
lang=PT style='font-family:"Times New Roman",serif'>identificador de conta para
transferências bancárias.&nbsp;A chave Pix utilizada poderá ser: CPF, número
telefônico, endereço de e-mail ou chave aleatória. O Beneficiário poderá optar
por utilizar qualquer um destes dados.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Programa Clube PRO+ (“Programa”):</span></b><span
lang=PT style='font-family:"Times New Roman",serif'> programa de fidelidade
idealizado, desenvolvido, promovido e administrado pela TOTALENERGIES, que
confere prêmios aos Beneficiários, nos termos deste Regulamento. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Rede de Distribuição TOTALENERGIES
Participante:</span></b><span lang=PT style='font-family:"Times New Roman",serif'>
pessoas jurídicas autorizadas pela TOTALENERGIES para comercialização de
Produtos TOTALENERGIES que participam do Programa conforme regulamento próprio.
A Rede de Distribuição TOTALENERGIES participante é aquela informada na
plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Grupos de Compra</span></b><span
lang=PT style='font-family:"Times New Roman",serif'>: são agrupamentos de
pessoas jurídicas e/ou físicas que, por interesses próprios, negociam e/ou
administram seus negócios em conjunto. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Representantes Legais</span></b><span
lang=PT style='font-family:"Times New Roman",serif'>: são as pessoas físicas
que representam legalmente os Grupos de Compra ou as pessoas jurídicas tidas
como Beneficiários do Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>II. CADASTRO E PARTICIPAÇÃO NO
PROGRAMA</span></b><span lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.1. Os Beneficiários são automaticamente
pré-cadastrados no Programa, devendo confirmar sua participação na Plataforma Clube
PRO+. Em caso de dúvida, os Beneficiários devem entrar em contato com os canais
de atendimento Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>Ao concluírem seus cadastros, os Beneficiários serão
convidados a aceitarem os termos e condições deste Regulamento.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.1.1. As pessoas físicas e/ou pessoas jurídicas
deverão optar por participar individualmente ou por meio de Grupo de Compra.
Para que não restem dúvidas, não será permitida a participação simultânea no
Programa de forma individual e por meio de Grupo de Compras.  </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.1.2. É condição essencial para participação no
Programa que os Beneficiários aceitem os termos e condições deste Regulamento. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.2.3. Ao realizarem seus cadastros no Programa, os
Beneficiários declaram que todas as informações disponibilizadas são verídicas
e ainda que: (i) são maiores de 18 (dezoito) anos, no caso de pessoas físicas.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.2.4. É de responsabilidade do Beneficiário indicar
via plataforma do Clube PRO+ o “Bipador”. Responsável pelo
escaneamento/registro dos QR codes das embalagens de produtos TOTALENERGIES
elegíveis nesta campanha.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.2.5. O Beneficiário também poderá ser o responsável
pelo escaneamento/registro do QR Code das embalagens de produtos TOTALENERGIES
elegíveis não implicando em qualquer impacto as regras deste regulamento.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.2.6. É de responsabilidade do Beneficário realizar a
gestão dos “bipadores” vinculados ao seu PDV. O Beneficiário poderá fazer a
gestão desta equipe via plataforma Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.2.7. Não será possível indicar o mesmo bipador para
PDV diferentes (CNPJ). Só será permitido o vínculo a um único PDV.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>III. ACÚMULO E RESGATE DOS PRÊMIOS</span></b><span
lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>3.1. Somente após a confirmação do aceite aos termos
deste Regulamento é que os Beneficiários poderão fazer uso dos seus prêmios. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>3.2. Detalhes quanto ao acúmulo de Pontos por produto encontram-se
descritos no aplicativo Clube PRO+ na sessão: Produtos elegíveis. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>3.3. O resgate dos prêmios acumulados pelos
Beneficiários será realizado dentro da plataforma Clube PRO+ através de
transação financeira PIX. Os termos e condições de resgate são determinados
pela Plataforma Clube PRO+ e são regidos por seus regulamentos. Para que não
restem dúvidas, a Plataforma Clube PRO+ é conduzida por empresa independente,
direta e exclusivamente responsável pelo resgate dos Prêmios, cabendo à TOTALENERGIES
tão somente a gestão e regramento dentro do seu próprio Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>3.3.1. A liberação dos prêmios aos Beneficiários
ocorrerá de forma instantânea a partir do acúmulo mínimo do saldo para resgate
estabelecido em R$ 100,00. Não serão permitidos resgates inferiores a este
valor. A transação de transferência ocorre de maneira online e instantaneamente
no momento da solicitação da transação bancária.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>3.3.2. O Beneficiário responsável pela conta no Clube
PRO+, só poderá realizar transações de resgates para sua conta pessoal. Não
será permitido transferência de valores para terceiros via aplicativo da
campanha.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> <b>IV. ACÚMULO DE PONTOS E CONVERSÃO DE PRÊMIOS</b></span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.1. Os Beneficiários acumularão Pontos no Programa em
duas etapas:</span></p>

<p class=MsoNormal style='text-align:justify;text-indent:35.4pt'><span lang=PT
style='font-family:"Times New Roman",serif'>i. aquisição de Produtos TOTALENERGIES
elegíveis ao Programa na Rede de Distribuição autorizada e elegíveis neste
Programa. </span></p>

<p class=MsoNormal style='text-align:justify;text-indent:35.4pt'><span lang=PT
style='font-family:"Times New Roman",serif'>ii. escaneamento/registro do QR
Code contido nas embalagens dos produtos elegíveis ao programa na plataforma
Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.2. Fica desde já esclarecido que a aquisição de
Produtos TOTALENERGIES elegíveis nesta campanha realizada em entidades/Distribuidores
não elegíveis ao programa, não possibilitará o acúmulo de Pontos e acúmulo de pontos
e premiações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.3. Quando os pontos forem originados da participação
em campanhas sazonais promovidas pela TOTALENERGIES, as regras de acúmulo de
Pontos e prêmios correspondentes aplicáveis serão aqueles constantes nos
regulamentos das campanhas vigentes. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.4. Os Pontos e Prêmios eventualmente concedidos pela
TOTALENERGIES aos quais os Beneficiários não façam jus nos termos deste
Regulamento serão estornados pela TOTALENERGIES, sem qualquer ônus. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.5. Não será possível a transferência de pontos entre
contas de outros beneficiários do Programa.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.6. Os Beneficiários que integrarem Grupos de Compra
serão considerados em conjunto para fins cálculo de acúmulo de Pontos e
conversão de premiações. Os Pontos e Prêmios efetivamente acumulados serão
creditados em conta única, não sendo possível o desmembramento por unidade de
PDV (pessoa jurídica). </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.7. Em caso de discordância do saldo prêmios em seu
cadastro, os Beneficiários deverão solicitar a averiguação junto aos Canais de
Atendimento Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.8. A alegação dos Beneficiários quanto ao não
lançamento de Pontos deverá ocorrer dentro do prazo de validade dos Pontos
pleiteados e não computados no registro de pontos do Beneficiário, nos termos
deste Regulamento.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.9. Não terá validade para fins de geração de pontos
ou prêmios a apresentação de Notas fiscais de compra de produtos TOTALENERGIES
elegíveis neste programa. A única e exclusiva forma de geração de pontos e
premiações neste programa se dá através do escaneamento/registro do QR code na
plataforma Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.10. A TOTALENERGIES poderá, a qualquer momento, e a
seu exclusivo critério, alterar a forma de acúmulo dos Pontos no Programa,
inclusive adotar um cálculo diferenciado por tipo ou categoria de produto ou
outro referencial, seja em caráter definitivo ou promocional. Os novos valores
e a proporcionalidade dos Pontos serão informados por meio da Plataforma Clube
PRO+ e em outros canais de fácil acesso público que a TOTALENERGIES julgar
necessário, com antecedência mínima de 15 (quinze) dias da data de início da
efetiva alteração a ser implementada. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>V. VERIFICAÇÃO DE INCONSISTÊNCIAS E
FRAUDES</span></b><span lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.1. A TOTALENERGIES se reserva ao direito de efetuar
toda e qualquer ação corretiva que se aplique às ações de Beneficiário que
venham a interferir no bom funcionamento do Programa, como também se reserva ao
direito de efetuar análises periódicas, baseadas em critérios objetivos
apurados nos registros dos Beneficiários, hipótese em que, se constatadas
inconsistências, fica-lhe facultado o direito de suspender a participação do
Beneficiário no Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.1.1. A retirada da suspensão do Beneficiário se dará
após análise a ser efetuada pela TOTALENERGIES, a partir do contato do
Beneficiário com os Canais de atendimento Clube PRO+, ocasião em que a TOTALENERGIES
poderá solicitar informações ao Beneficiário. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.2. A TOTALENERGIES, dentro dos limites da boa-fé,
adotará métodos objetivos para verificar a razoabilidade do acúmulo de Pontos,
a partir dos históricos de participação no Programa, da aquisição média de
Produtos TOTALENERGIES e do perfil do Beneficiário junto ao Programa, de forma
inclusive, a identificar eventuais inconsistências no sistema, a fim de
prontamente corrigir distorções e/ou coibir imperfeições, e de zelar pela
integridade do Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.3. A ocorrência da suspensão implica a perda
imediata dos Pontos e prêmios do Beneficiário, independente dos prazos de
validade de suas premiações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.4. Após análise fundamentada dos argumentos dos
Beneficiários, se restarem constatadas inconsistências nos Pontos e Prêmios
acumulados, estes<b> </b>serão automaticamente cancelados, sem que caibam ao
Beneficiário quaisquer compensações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.5. Caso seja verificado dolo do Beneficiário em
fraudar e/ou não cumprir os termos e condições deste Regulamento, bem como os
princípios do Programa, A TOTALENERGIES poderá: (i) excluir o Beneficiário do
Programa; (ii) não mais aceitar que o Beneficiário infrator acumule 3Pontos e
Prêmios, e/ou realize o resgate do saldo de prêmios acumulados e; (iii) tomar
eventuais medidas legais cabíveis contra o Beneficiário. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>VI. CONDUTA E OBRIGAÇÕES DO
BENEFICIÁRIO</span></b><span lang=PT style='font-family:"Times New Roman",serif'>
</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>6.1. Sem prejuízo das demais disposições deste
Regulamento, como condição para utilização da Plataforma Clube PRO+, e por
consequência, para participação no Programa, o Beneficiário expressamente
declara e garante que: </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(i) não utilizará as informações nele contidas para
fins ilegais; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(ii) não cederá a terceiros, a qualquer título, sob
qualquer pretexto e a qualquer tempo, seu nome de usuário e sua senha de acesso
à Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(iii) não praticará quaisquer atos que violem a
legislação aplicável à utilização da Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(iv) não obterá ou tentará obter acesso impróprio a
informações de outro Beneficiário da Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(v) fornecerá todas as informações necessárias à
utilização da Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(vi) todas as informações fornecidas para utilização
da Plataforma Clube PRO+ são válidas e corretas;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(vii) à sua responsabilidade, providenciará todos os
equipamentos e sistemas necessários para ter acesso à Plataforma Clube PRO+;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> (viii) que leu e está ciente e de pleno acordo com
todos os termos e condições deste Regulamento. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>VII. EXCLUSÃO DE GARANTIAS E DE
RESPONSABILIDADES </span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>7.1. a TOTALENERGIES tomará todas as medidas a seu
alcance necessárias à preservação das informações dos Beneficiários na
Plataforma Clube PRO+. Contudo, os Beneficiários declaram-se cientes de que a
Plataforma Clube PRO+ poderá ser alvo de ações delituosas que eventualmente
poderão expor informações nela constantes. Para estes casos, a TOTALENERGIES se
exime de toda e qualquer responsabilidade pelos danos e prejuízos de toda
natureza que possam decorrer da exposição delituosa das informações atinentes
aos Beneficiários disponibilizadas pela Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>8.5. A TOTALENERGIES se exime, ainda, de todos e
quaisquer danos e prejuízos de toda natureza que possam decorrer da
transmissão, difusão, armazenamento, disponibilização, recepção, obtenção ou
acesso indevido às informações do Beneficiário disponibilizadas na Plataforma Clube
PRO+, e em particular, ainda que não de modo exclusivo, pelos danos e prejuízos
que possam decorrer: </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(i) do descumprimento da moral, dos bons costumes
geralmente aceitos ou da ordem pública, como consequência da transmissão,
difusão, armazenamento, disponibilização, recepção, obtenção ou acesso indevido
das informações disponibilizadas na Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(ii) da realização de atos de concorrência desleal e
publicidade ilícita por parte de Beneficiários e/ou terceiro em função da
transmissão, difusão, armazenamento, disponibilização, recepção, obtenção ou
acesso indevido às informações disponibilizadas na Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(iii) da falta de precisão, exatidão, pertinência e/ou
atualidade das informações contidas na Plataforma Clube PRO+;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> (iv) da inadequação para qualquer tipo de propósito,
ou da frustração das expectativas geradas pelas informações disponibilizadas na
Plataforma Clube PRO+; e </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(v) da violação de segredos empresariais e/ou
compromissos contratuais de qualquer tipo em função da transmissão, difusão,
armazenamento, disponibilização, recepção, obtenção ou acesso indevido às
informações disponibilizadas na Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>VIII. REGRAS CÓDIGOS QR</span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>8.1 <b>Período de escaneamento/leitura dos QR Codes</b>:
os QR Codes impressos nas embalagens dos Produtos TOTALENERGIES elegíveis terão
prazo de validade de 12 meses (doze) para serem registrados na plataforma Clube
PRO+, contados a partir da emissão do código e não da data de compra do
produto. Após este período, os códigos serão inativados e perdem sua validade.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> 8.2. Após o código QR ser utilizado através de
registro na plataforma Clube PRO+, o mesmo não poderá ser utilizado novamente. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>8.3. O QR code poderá ser registrado na plataforma de
duas formas:</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>            (i) via escaneamento do código através da
câmera do celular;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>            (ii) por meio da digitação do código
impresso na embalagem no campo indicado na plataforma Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>IX. DISPOSIÇÕES GERAIS </span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.1. Ao participarem do Programa, os Beneficiários
deverão cumprir e estar de acordo com todas as regras do Programa e da
Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.2. O Beneficiário se obriga a manter atualizados
seus dados cadastrais junto ao Programa Clube PRO+, em especial para o
recebimento de comunicações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> 9.3. O Beneficiário poderá esclarecer eventuais
dúvidas sobre o Programa por meio dos Canais de atendimento Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.4. Ao entrar no Programa, efetuando seu cadastro, o
Beneficiário automaticamente anui integralmente com todos os termos e condições
deste Regulamento, sem ressalvas, inclusive com o recebimento de emails
promocionais relacionados às atividades da TOTALENERGIES, pesquisas e mensagens
em SMS bem como e-mails referentes à comunicação acerca de assuntos relevantes
à sua participação no Programa. Caso seja de interesse do Beneficiário cessar o
recebimento de e-mails promocionais da TOTALENERGIES, este poderá, a qualquer
tempo, sem necessidade de prévia justificativa ou que lhe seja imposto encargo
de qualquer espécie, a partir do recebimento do primeiro e-mail promocional,
solicitar o imediato cancelamento do recebimento destes, conforme instruções
dispostas no corpo do próprio e-mail promocional e também por meio dos Canais
de atendimento Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.5. O Beneficiário autoriza o uso gratuito de seu
nome, e-mail, imagem e voz em qualquer tipo de mídia, incluindo internet, e
peças promocionais para fins de divulgação de eventuais premiações recebidas no
âmbito do Programa, sem qualquer ônus para a TOTALENERGIES. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.6. Os Beneficiários outorgam a TOTALENERGIES o
direito de armazenar em banco de dados as informações contidas no cadastro dos
Beneficiários e as informações referentes aos seus hábitos de compra e resgate
dos prêmios, comprometendo-se, a TOTALENERGIES, a respeitar a privacidade dos
Beneficiários e manter total confidencialidade dessas informações,
utilizando-as de acordo com a Política de Privacidade Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.7. Fica assegurado a TOTALENERGIES o direito de, a
qualquer tempo, mediante aviso prévio de 30 (trinta) dias cancelar ou modificar
parcial ou totalmente o Programa, assegurados aos Beneficiários as premiações que
fizerem jus até a data da sua modificação ou cancelamento, na forma deste
Regulamento. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.8. Este Programa está isento de qualquer modalidade
de sorte. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>10.9. O descumprimento das cláusulas e condições deste
Regulamento pelo Beneficiário ensejará o cancelamento das premiações por este. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>11.10. Os casos omissos neste Regulamento serão
solucionados segundo o entendimento exclusivo da TOTALENERGIES. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>12.11. A qualquer tempo, os Beneficiários poderão
cancelar sua participação no Programa. Para tanto, os mesmos deverão solicitar
a exclusão de sua participação no Programa por meio de procedimento próprio
constante nos Canais de atendimento Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>12.12. A tolerância da TOTALENERGIES com o
Beneficiário quanto ao não cumprimento de qualquer uma das obrigações assumidas
neste Regulamento não implicará alteração contratual, novação, perdão ou
renúncia de direito. A TOTALENERGIES poderá, a qualquer tempo, exigir do
Beneficiário, o fiel e cabal cumprimento deste Regulamento.  </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>14.13. Este Regulamento entra em vigor a partir de 27/11/2023
e vigorará por prazo indeterminado. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>X. FORO</span></b><span lang=PT
style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>10.1. Este Regulamento é regido pelas leis
brasileiras. Quaisquer controvérsias dele oriundas deverão ser dirimidas no
Foro da Comarca da Capital do Estado de São Paulo, com renúncia a qualquer
outro, por mais privilegiado que seja. </span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

<p class=MsoNormal align=center style='text-align:center'><b><span lang=PT
style='font-size:14.0pt;font-family:"Times New Roman",serif'>REGULAMENTO</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span lang=PT
style='font-size:14.0pt;font-family:"Times New Roman",serif'>PLATAFORMA CLUBE
PRO+. [BIPADOR]</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>A Plataforma CLUBE PRO+, é instituído pela <b>TOTALENERGIES</b>
DISTRIBUIDORA BRASIL&nbsp;LTDA, sociedade empresária inscrita no CNPJ sob o n.
71.770.689/0001-81, com sede na Avenida Tobias Salgado, n. 45, Distrito
Industrial, Pindamonhangaba/SP, CEP: 12.412-770 e sua filial escritório para o
recebimento de notificações inscrita no CNPJ sob o n. 71.770.689/0003-43,
situada na Rua Fidêncio Ramos, nº 302, 3º andar, Torre B, Vila Olímpia, São
Paulo/SP, CEP: 04551-010, neste regulamento devidamente representada na forma
de seu Contrato Social, (“<b>TOTALENERGIES</b>”).</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-size:
12.0pt;font-family:"Calibri Light",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>I. DEFINIÇÕES</span></b><span
lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>1.1. Para os fins deste Regulamento são considerados,
no singular ou no plural, os termos abaixo iniciados por letras maiúsculas, de
forma que sempre que aparecerem neste Regulamento terão os significados
atribuídos abaixo: </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Aplicativo</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: aplicativo de celular atrelado ao
Programa Clube PRO+  no qual os usuários poderão gerenciar e conduzir sua
participação no Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>PDV</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: Ponto de Troca de óleo registrado
pelos Distribuidores responsáveis por seu atendimento.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Bipador</span></b><span lang=PT
style='font-family:"Times New Roman",serif'>: pessoas físicas vinculada a um
PDV (pessoa jurídica). Este usuário terá papel exclusivo na ação de escaner/registro
dos QR na plataforma do Programa.Neste regulamento será intutulado “Usuário”.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Canais de Atendimento Clube PRO+</span></b><span
lang=PT style='font-family:"Times New Roman",serif'>: central de atendimento aos
usuários do programa Clube PRO+ por meio de atendimento online e telefônico, habilitada
ao esclarecimento de dúvidas quanto ao Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Pontos:</span></b><span lang=PT
style='font-family:"Times New Roman",serif'> é unidade de peso atribuída aos
produtos participantes da campanha. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>QR:</span></b><span lang=PT
style='font-family:"Times New Roman",serif'> Código de leitura aplicado nas embalagens
de produtos TOTALENERGIES elegíveis a este programa. Será através do
escaneamento/registro deste QR code que os pontos serão gerados.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>Rede de Distribuição TOTALENERGIES
Participante:</span></b><span lang=PT style='font-family:"Times New Roman",serif'>
pessoas jurídicas autorizadas pela TOTALENERGIES para comercialização de
Produtos TOTALENERGIES que participam do Programa conforme regulamento próprio.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>II. CADASTRO E PARTICIPAÇÃO NO
PROGRAMA</span></b><span lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.1. Os bipadores são cadastrados na plataforma via
indicação dos proprietários dos PDV’s: (Pontos de Venda de que atuam no
segmento automotivo com revenda de produtos TotalEnergies e troca de óleo: auto
centers, oficinas, etc). participantes do Programa, devendo confirmar sua
participação na Plataforma Clube PRO+. Em caso de dúvida, devem entrar em
contato com os canais de atendimento Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>Ao concluírem seus cadastros, serão convidados a
aceitarem os termos e condições deste Regulamento.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.1.1. As pessoas indicadas como Bipadores não poderão
estar atreladas a mais de um PDV (CNPJ) diferente na plataforma. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.1.2. É condição essencial para participação no
Programa que os participantes aceitem os termos e condições deste Regulamento. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>2.2.3. Ao realizarem seus cadastros no Programa, os participantes
declaram que todas as informações disponibilizadas são verídicas e ainda que:
(i) são maiores de 18 (dezoito) anos, no caso de pessoas físicas.</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>IV. ACÚMULO DE PONTOS</span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.1. O PDV poderá acumular Pontos em duas etapas:</span></p>

<p class=MsoNormal style='text-align:justify;text-indent:35.4pt'><span lang=PT
style='font-family:"Times New Roman",serif'>i. aquisição de Produtos TOTALENERGIES
elegíveis ao Programa na Rede de Distribuição autorizada e elegíveis neste
Programa. </span></p>

<p class=MsoNormal style='text-align:justify;text-indent:35.4pt'><span lang=PT
style='font-family:"Times New Roman",serif'>ii. escaneamento/registro do QR
Code contido nas embalagens dos produtos elegíveis ao programa na plataforma
Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.2. Fica desde já esclarecido que a aquisição de
Produtos TOTALENERGIES elegíveis nesta campanha realizada em entidades/Distribuidores
não elegíveis ao programa, não possibilitará o acúmulo de Pontos e acúmulo de pontos
e premiações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.3. Quando os pontos forem originados da participação
em campanhas sazonais promovidas pela TOTALENERGIES, as regras de acúmulo de
Pontos correspondentes aplicáveis serão aqueles constantes nos regulamentos das
campanhas vigentes. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.4. Os Pontos eventualmente concedidos pela TOTALENERGIES
aos quais o PDV não faça jus nos termos deste Regulamento serão estornados pela
TOTALENERGIES, sem qualquer ônus. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.5. Não será possível a transferência de pontos entre
contas de PDVs participantes do Programa.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.6. Em caso de discordância das informações dos
pontos recebidos, o responsável deverá solicitar a averiguação junto aos Canais
de Atendimento Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.7. A alegação do PDV quanto ao não lançamento de
Pontos deverá ocorrer dentro do prazo de validade dos Pontos pleiteados e não
computados no registro de pontos do PDV, nos termos deste Regulamento.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.8. Não terá validade para fins de geração de pontos
a apresentação de Notas fiscais de compra de produtos TOTALENERGIES elegíveis
neste programa. A única e exclusiva forma de geração de pontos neste programa
se dá através do escaneamento/registro do QR code na plataforma Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>4.9. A TOTALENERGIES poderá, a qualquer momento, e a
seu exclusivo critério, alterar a forma de acúmulo dos Pontos no Programa,
inclusive adotar um cálculo diferenciado por tipo ou categoria de produto ou
outro referencial, seja em caráter definitivo ou promocional. Os novos valores
e a proporcionalidade dos Pontos serão informados por meio da Plataforma Clube
PRO+ e em outros canais de fácil acesso público que a TOTALENERGIES julgar
necessário, com antecedência mínima de 15 (quinze) dias da data de início da
efetiva alteração a ser implementada. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>V. VERIFICAÇÃO DE INCONSISTÊNCIAS E
FRAUDES</span></b><span lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.1. A TOTALENERGIES se reserva ao direito de efetuar
toda e qualquer ação corretiva que se aplique às ações de usuário que venham a
interferir no bom funcionamento do Programa, como também se reserva ao direito
de efetuar análises periódicas, baseadas em critérios objetivos apurados nos
registros do PDV, hipótese em que, se constatadas inconsistências, fica-lhe
facultado o direito de suspender a participação do PDV Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.1.1. A retirada da suspensão do PDV se dará após
análise a ser efetuada pela TOTALENERGIES, a partir do contato do PDV com os
Canais de atendimento Clube PRO+, ocasião em que a TOTALENERGIES poderá
solicitar informações ao PDV. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.2. A TOTALENERGIES, dentro dos limites da boa-fé,
adotará métodos objetivos para verificar a razoabilidade do acúmulo de Pontos,
a partir dos históricos de participação no Programa, da aquisição média de
Produtos TOTALENERGIES e do perfil do PDV junto ao Programa, de forma
inclusive, a identificar eventuais inconsistências no sistema, a fim de
prontamente corrigir distorções e/ou coibir imperfeições, e de zelar pela
integridade do Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.3. A ocorrência da suspensão implica a perda
imediata dos Pontos do PDV, independente dos prazos de validade. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.4. Após análise fundamentada dos argumentos do PDV,
se restarem constatadas inconsistências nos Pontos acumulados, estes serão
automaticamente cancelados, sem que caibam ao PDV quaisquer compensações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>5.5. Caso seja verificado dolo do PDV em fraudar e/ou
não cumprir os termos e condições deste Regulamento, bem como os princípios do
Programa, A TOTALENERGIES poderá: (i) excluir o PDV do Programa; (ii) não mais
aceitar que o PDV infrator acumule Pontos e; (iii) tomar eventuais medidas
legais cabíveis contra o PDV. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>VI. CONDUTA E OBRIGAÇÕES</span></b><span
lang=PT style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>6.1. Sem prejuízo das demais disposições deste
Regulamento, como condição para utilização da Plataforma Clube PRO+, e por
consequência, para participação no Programa, o participante expressamente
declara e garante que: </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(i) não utilizará as informações nele contidas para
fins ilegais; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(ii) não cederá a terceiros, a qualquer título, sob
qualquer pretexto e a qualquer tempo, seu nome de usuário e sua senha de acesso
à Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(iii) não praticará quaisquer atos que violem a
legislação aplicável à utilização da Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(iv) não obterá ou tentará obter acesso impróprio a
informações de outro PDV da Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(v) fornecerá todas as informações necessárias à
utilização da Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(vi) todas as informações fornecidas para utilização
da Plataforma Clube PRO+ são válidas e corretas;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(vii) à sua responsabilidade, providenciará todos os
equipamentos e sistemas necessários para ter acesso à Plataforma Clube PRO+;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> (viii) que leu e está ciente e de pleno acordo com
todos os termos e condições deste Regulamento. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>VII. EXCLUSÃO DE GARANTIAS E DE
RESPONSABILIDADES </span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>7.1. a TOTALENERGIES tomará todas as medidas a seu
alcance necessárias à preservação das informações dos usuários na Plataforma Clube
PRO+. Contudo, os usuários declaram-se cientes de que a Plataforma Clube PRO+
poderá ser alvo de ações delituosas que eventualmente poderão expor informações
nela constantes. Para estes casos, a TOTALENERGIES se exime de toda e qualquer
responsabilidade pelos danos e prejuízos de toda natureza que possam decorrer
da exposição delituosa das informações atinentes aos usuários disponibilizadas
pela Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>8.5. A TOTALENERGIES se exime, ainda, de todos e
quaisquer danos e prejuízos de toda natureza que possam decorrer da
transmissão, difusão, armazenamento, disponibilização, recepção, obtenção ou
acesso indevido às informações do usuário disponibilizadas na Plataforma Clube
PRO+, e em particular, ainda que não de modo exclusivo, pelos danos e prejuízos
que possam decorrer: </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(i) do descumprimento da moral, dos bons costumes
geralmente aceitos ou da ordem pública, como consequência da transmissão,
difusão, armazenamento, disponibilização, recepção, obtenção ou acesso indevido
das informações disponibilizadas na Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(ii) da realização de atos de concorrência desleal e
publicidade ilícita por parte de usuários e/ou terceiro em função da
transmissão, difusão, armazenamento, disponibilização, recepção, obtenção ou
acesso indevido às informações disponibilizadas na Plataforma Clube PRO+; </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(iii) da falta de precisão, exatidão, pertinência e/ou
atualidade das informações contidas na Plataforma Clube PRO+;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> (iv) da inadequação para qualquer tipo de propósito,
ou da frustração das expectativas geradas pelas informações disponibilizadas na
Plataforma Clube PRO+; e </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>(v) da violação de segredos empresariais e/ou
compromissos contratuais de qualquer tipo em função da transmissão, difusão,
armazenamento, disponibilização, recepção, obtenção ou acesso indevido às
informações disponibilizadas na Plataforma Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>VIII. REGRAS CÓDIGOS QR</span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>8.1 <b>Período de escaneamento/leitura dos QR Code</b>:
os QR Code impressos nas embalagens dos Produtos TOTALENERGIES elegíveis terão prazo
de validade de 12 meses (doze) meses para serem registrados na plataforma Clube
PRO+, contados a partir da emissão do código e não da data de compra do
produto. Após este período, os códigos serão inativados e perdem sua validade.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> 8.2. Após o código QR ser utilizado através de
registro na plataforma Clube PRO+, o mesmo não poderá ser utilizado novamente. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>8.3. O QR code poderá ser registrado na plataforma de
duas formas:</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>            (i) via escaneamento do código através da
câmera do celular;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>            (ii) por meio da digitação do código
impresso na embalagem no campo indicado na plataforma Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>IX. DISPOSIÇÕES GERAIS </span></b></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.1. Ao participarem do Programa, os usuários deverão
cumprir e estar de acordo com todas as regras do Programa e da Plataforma Clube
PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.2. O usuário se obriga a manter atualizados seus
dados cadastrais junto ao Programa Clube PRO+, em especial para o recebimento
de comunicações. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'> 9.3. O usuário poderá esclarecer eventuais dúvidas
sobre o Programa por meio dos Canais de atendimento Clube PRO+.</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.4. Ao entrar no Programa, efetuando seu cadastro, o usuário
automaticamente anui integralmente com todos os termos e condições deste
Regulamento, sem ressalvas, inclusive com o recebimento de emails promocionais
relacionados às atividades da TOTALENERGIES, pesquisas e mensagens em SMS bem
como e-mails referentes à comunicação acerca de assuntos relevantes à sua
participação no Programa. Caso seja de interesse do usuário cessar o
recebimento de e-mails promocionais da TOTALENERGIES, este poderá, a qualquer
tempo, sem necessidade de prévia justificativa ou que lhe seja imposto encargo
de qualquer espécie, a partir do recebimento do primeiro e-mail promocional,
solicitar o imediato cancelamento do recebimento destes, conforme instruções
dispostas no corpo do próprio e-mail promocional e também por meio dos Canais
de atendimento Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.5. O usuário autoriza o uso gratuito de seu nome,
e-mail, imagem e voz em qualquer tipo de mídia, incluindo internet, e peças
promocionais para fins de divulgação de eventuais premiações recebidas no
âmbito do Programa, sem qualquer ônus para a TOTALENERGIES. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.6. Os usuários outorgam a TOTALENERGIES o direito de
armazenar em banco de dados as informações contidas no cadastro do usuário e
movimentações na plataforma, comprometendo-se, a TOTALENERGIES, a respeitar a
privacidade dos usuários e manter total confidencialidade dessas informações,
utilizando-as de acordo com a Política de Privacidade Clube PRO+. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.7. Fica assegurado a TOTALENERGIES o direito de, a
qualquer tempo, mediante aviso prévio de 30 (trinta) dias cancelar ou modificar
parcial ou totalmente o Programa. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>9.8. Este Programa está isento de qualquer modalidade
de sorte. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>10.9. O descumprimento das cláusulas e condições deste
Regulamento pelo usuário ensejará o cancelamento de possíveis premiações por
este. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>11.10. Os casos omissos neste Regulamento serão
solucionados segundo o entendimento exclusivo da TOTALENERGIES. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>12.11. A qualquer tempo, os usuários poderão cancelar
sua participação no Programa. Para tanto, os mesmos deverão solicitar a
exclusão de sua participação no Programa por meio de procedimento próprio
constante nos Canais de atendimento Clube PRO+. </span></p>

<p class=MsoNormal><span lang=PT style='font-family:"Times New Roman",serif'>12.12.
A tolerância da TOTALENERGIES com o usuário quanto ao não cumprimento de
qualquer uma das obrigações assumidas neste Regulamento não implicará alteração
contratual, novação, perdão ou renúncia de direito. A TOTALENERGIES poderá, a
qualquer tempo, exigir do usuário, o fiel e cabal cumprimento deste Regulamento. 
</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>14.13. Este Regulamento entra em vigor a partir de 27/11/2023
e vigorará por prazo indeterminado. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=PT
style='font-family:"Times New Roman",serif'>X. FORO</span></b><span lang=PT
style='font-family:"Times New Roman",serif'> </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=PT style='font-family:
"Times New Roman",serif'>10.1. Este Regulamento é regido pelas leis
brasileiras. Quaisquer controvérsias dele oriundas deverão ser dirimidas no
Foro da Comarca da Capital do Estado de São Paulo, com renúncia a qualquer
outro, por mais privilegiado que seja. </span></p>

<p class=MsoBodyText style='margin-top:0cm;margin-right:5.7pt;margin-bottom:
0cm;margin-left:13.05pt;margin-bottom:.0001pt;text-align:justify'><span
class=MsoHyperlink><span lang=PT><span style='text-decoration:none'>&nbsp;</span></span></span></p>

</div>

</body>

</html>

     
  `,
};

const TermsScreen: React.FC = () => {
  const { user, userName, login, logout } = useAuth();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  return (
    <View style={styles.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          bottom: 30,
          borderRadius: 20,
          marginHorizontal: 20,
        }}
      >
        <ScrollView>
          <WebView
            style={styles.webview_}
            source={dataTerms}
            startInLoadingState={true}
            javaScriptEnabled={true}
            scalesPageToFit={true}
            originWhitelist={["*"]}
            nestedScrollEnabled={true}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    height: "auto", // Increase the height here
  },
  answer: {
    fontSize: 16,
    color: "#333",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3F3F3",
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: "80%",
  },
  containerRed: {
    backgroundColor: "red",
    height: 150,
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  cardBalance: {
    width: "80%",
    backgroundColor: "white",
    height: 230,
    borderRadius: 8,
    marginTop: -70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 30,
    paddingLeft: 20,
    gap: 20,
  },
  text_subTitleSize: {
    fontSize: 14,
  },
  text_subTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    paddingLeft: 10,
  },
  buttonText: {
    color: "#A6A6A6",
    fontSize: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "#A6A6A6",
    width: "100%",
    marginTop: 4,
  },
  greenButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#85D151",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width: 200,
  },
  icon: {
    marginRight: 10,
  },
  greenButtonText: {
    color: "white",
    fontSize: 16,
  },
  menu: {
    width: "90%",
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
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
  outline1: { color: "#000000", left: -1, top: -1 },
  imageBig: {
    width: "80%",
    resizeMode: "cover",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8,
  },
  webview_: {
    marginLeft: -30,
    marginTop: -30,
    width: width * 1.0,
    height: height - height * 0.1,
  },
});

export default TermsScreen;
