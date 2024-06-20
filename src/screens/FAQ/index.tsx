import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CardNews from "../../components/CardNews";
import api from "../../services/api";
import axios from "axios";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const dataFAQ = [
  {
    title: "O que é o Programa Clube PRO+?",
    details:
      "O Programa Clube PRO+ é uma iniciativa da TotalEnergies. Trata-se de um Programa de relacionamento destinado aos Distribuidores e PDVs de troca de oléo de produtos TotalEnergies. O PDV acumula pontos através da compra de produtos TotalEnergies e estes pontos são convertidos em valores de premiação que podem ser resgatados diretamente na plataforma do programa.",
  },
  {
    title: "Como faço para alterar as informações da minha conta?",
    details:
      "Para alterar qualquer dado de sua conta, pedimos que entre em contato com nossos canais de atendimento por e-mail: contato@clubepromais.com.br. Lembrando que alterações cadastrais só podem ser feitas pelo titular do cadastro.",
  },
  {
    title: "Como faço para alterar ou redefinir minha senha?",
    details:
      'Para alterar sua senha caso já esteja conectado:\n\n1. Clique em minha conta, localizado no canto inferior direito do aplicativo.\n2. Clique em "Configurações".\n3. Clique sobre “Redefinir senha”.\n4. Sigo os passos e conclua a solicitação.',
  },
  {
    title: "Agora, caso tenha esquecido sua senha e queira redefinir:",
    details:
      '1. Clique em "Esqueci senha".\n2. Informe seu e-mail cadastrado.\n3. Ao clicar em "enviar", será enviado um código de segurança para o seu e-mail.\n4. Insira o código no campo indicado.\n5. Insira sua nova senha no campo e clique em "Enviar".',
  },
  {
    title:
      "Não tenho mais acesso ao e-mail que está no cadastro e não me recordo a senha, como faço para acessar?",
    details:
      "Neste caso, pedimos que entre em contato com nossos canais de atendimento: por e-mail: contato@clubepromais.com.br. Lembrando que alterações cadastrais só podem ser feitas pelo titular do cadastro.",
  },
  {
    title: "Como acúmulo pontos?",
    details:
      'O acúmulo de pontos se dará em 2 etapas:\n\n- Compra de Produtos TotalEnergies elegíveis no programa.\n- Registro do Qr Code das embalagens adquiridas no aplicativo da campanha.\n\nImportante: Só serão válidos produtos adquiridos nos Distribuidores Elegíveis da Campanha.\n\nPara consultar a lista de Distribuidores Elegíveis:\n\n1. Clique em minha conta, localizado no canto inferior direito do aplicativo.\n2. Clique em "Distribuidores Participantes".',
  },
  {
    title: "Quem pode resgatar os prêmios acumulados no Programa Clube PRO+?",
    details:
      "Todos os usuários cadastrados na plataforma que sejam os responsáveis (Proprietário) dos PDVs participantes desde que tenham saldo igual ou superior ao valor mínimo de transação: R$ 100,00.",
  },
  {
    title: "Todas minhas compras de Produtos TotalEnergies geram pontos?",
    details:
      'Não. Somente os produtos definidos na Matriz de Premiação pela TotalEnergies pontuam e geram prêmios.\nPara consultar a lista de produto elegíveis:\n\n1. Clique em minha conta, localizado no canto inferior direito do aplicativo.\n2. Clique em "Produtos Participantes".',
  },
  {
    title: "Os pontos têm validade? Eles podem expirar?",
    details:
      "Sim. Os pontos têm validade de 12 (doze) meses a partir da data de crédito em sua conta e expiram após este prazo.",
  },
  {
    title:
      "Posso transferir meus pontos para outro participante do Programa Clube PRO+?",
    details:
      "Não. Os pontos e premiações gerados no CPF/CNPJ do PDV são intransferíveis para outras contas.",
  },
  {
    title: "Como realizado meu resgate?",
    details:
      "Uma vez que o seu saldo disponibilizado no aplicativo, você precisará solicitar a transferência do valor para sua conta bancária. É bem simples, basta acessar sua conta no aplicativo e preencher os dados da chave PIX do destinatário. Você só poderá realizar a transferência para sua conta pessoal. Não será permitido transferir os valores para conta de terceiros.",
  },
  {
    title: "Posso resgatar o saldo da minha premiação a qualquer momento?",
    details:
      "Sim. A partir do saldo mínimo de R$100,00 o valor já pode ser transferido.",
  },
  {
    title: "Posso realizar o meu resgate sem ter uma chave PIX?",
    details:
      "Não. A plataforma só permite transações via chave PIX. Caso não possua uma chave PIX, você pode através da plataforma gerar uma chave PIX aleatória para realizar a transferência.",
  },
  {
    title:
      "Posso realizar a transferência da minha premiação para outras pessoas?",
    details:
      "Sim. Como beneficiário da premiação, você pode definir para quem deseja enviar os valores da sua premiação, independente do número de pessoas.",
  },
  {
    title:
      "Tenho algum limite de valor que posso fazer a transferência mensal?",
    details:
      "Não. Não temos valor máximo de transferência por mês. Caso tenha saldo disponível igual ou superior a R$ 100,00, a transferência pode ser efetuada.",
  },
  {
    title:
      "Fiz uma transferência para uma pessoa mas quero cancelar. Posso cancelar a transferência?",
    details:
      "Fiz uma transferência para uma pessoa mas quero cancelar. Posso cancelar a transferência?",
  },
  {
    title:
      "Em quanto tempo os valores dos prêmios são creditados após a transferência bancária?",
    details:
      "A premiação é creditada automaticamente no momento em que transferência é finalizada.",
  },
  {
    title:
      "Comprei produtos de um Distribuidor/revendedor que não está na lista dos Distribuidores elegíveis. Vou pontuar?",
    details:
      "Não. Somente serão válidas compras de produtos efetuadas nos Distribuidores elegíveis ao Programa.",
  },
  {
    title:
      "Recebi os produtos TotalEnergies mas as embalagens foram jogadas fora antes da leitura do Qrcode. Posso pontuar?",
    details:
      "Não. O crédito dos pontos e prêmios só se dará a partir da leitura dos Qrcodes contidos nas embalagens.",
  },
  {
    title:
      "Posso solicitar meus pontos através da Nota fiscal de compra sem a leitura do QR code?",
    details:
      "Não. O crédito dos pontos e prêmios só se dará a partir da leitura dos Qrcodes contidos nas embalagens. A NF não poderá ser considerada para geração de benefícios no programa.",
  },
  {
    title:
      "Minha embalagem de produtos TotalEnergies chegou danificada e com o QRcode não legível. O que devo fazer?",
    details:
      "Neste situação, caso não seja possível a leitura do Qr code através da câmera do seu celular, é possível fazer a digitação diretamente no campo indicado no aplicativo. Caso isso ainda não seja possível pedimos que entre em contato com nosso canal de atendimento: por e-mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
  {
    title:
      "Fiz a leitura de um QR code e está informando que este código já foi utilizado. O que devo fazer?",
    details:
      "Neste caso, verifique no aplicativo o histórico do Qrcode já registrado, pode ser que este código já esteja registrado em sua base. Caso não encontre, pedimos que entre em contato com nossos canais de atendimento: por e-mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
  {
    title:
      "Não consigo fazer a leitura do QR code através da câmera do meu celular. Como proceder?",
    details:
      "Você pode registrar o Qrcode das embalagens digitando diretamente o código registrado na embalagem no campo indicado no aplicativo. Caso seu problema persista, pedimos que entre em contato com nossos canais de atendimento: por e- mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
  {
    title:
      "Recebi embalagens de produtos TotalEnergies que estão sem o QRcode. O que devo fazer?",
    details:
      'Caso a embalagem de produto seja um produto elegível a campanha, pedimos que entre em contato com nossos canais de atendimento: por e-mail: contato@clubepromais.com.br para que possamos tratar o caso.\n\nPara consultar a lista de produto elegíveis:\n1. Clique em minha conta, localizado no canto inferior direito do aplicativo.\n2. Clique em "Produtos Participantes".',
  },
  {
    title:
      "Preciso efetuar a devolução de produtos TotalEnergies que realizei a leitura do Qrcode da embalagem. Vou perder meus pontos e premiações?",
    details:
      "Neste caso, antes de realizar a devolução pedimos que entre em contato com nossos canais de atendimento: por e-mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
  {
    title:
      "Fiz a compra de produtos TotalEnergies que não estão na lista de produtos elegíveis ao programa. Posso pontuar?",
    details:
      'Não. Somente os produtos que constam no regulamento geram pontos e premiações para os participantes.\nPara consultar a lista de produto elegíveis:\n\n1. Clique em minha conta, localizado no canto inferior direito do aplicativo.\n2. Clique em "Produtos Participantes".',
  },
  {
    title:
      "Fiz o registro do Qrcode, mas meus pontos e premiações ainda não foram creditados. O que pode ter ocorrido?",
    details:
      "Após a leitura do Qrcode das embalagens, os pontos e prêmios são creditados instantaneamente. Pedimos que verifique se a leitura do código QRcode foi feita corretamente. Em caso positivo, solicitamos entre em contato com nossos canais de atendimento: por e-mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
  {
    title:
      "Não consigo indicador um novo Bipador pois a plataforma. O sistema informa que o CPF já está cadastrado em outro PDV. O que devo fazer?Não consigo indicador um novo Bipador pois a plataforma. O sistema informa que o CPF já está cadastrado em outro PDV. O que devo fazer?",
    details:
      "Ao tentar indicar um bipador vinculado ao seu PDV, caso este já esteja cadastrado por outro PDV isso não será possível. Neste caso, por favor, entre em contato com nossos canais de atendimento: por e- mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
  {
    title:
      "Existe algum tipo de custo para realizar a transferência da minha premiação?",
    details: "Não. O valor transferido será recebido de forma integral.",
  },
  {
    title:
      "Devo declarar no meu Imposto de Renda as premiações recebidas no Programa?",
    details: "Não será necessário realizar a declaração no imposto de renda.",
  },
  {
    title:
      "Fiz o registro do Qrcode, mas os pontos não foram creditados. O que pode ter ocorrido?",
    details:
      "Após a leitura do Qrcode das embalagens, os pontos são creditados instantaneamente. Pedimos que verifique se a leitura do código QRcode foi feita corretamente. Em caso positivo, solicitamos entre em contato com nossos canais de atendimento: por e-mail: contato@clubepromais.com.br para que possamos tratar o caso.",
  },
];
const FAQScreen: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const { user, userName, login, logout } = useAuth();
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={{ color: "white", fontWeight: "800", fontSize: 18 }}>
            Olá
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "800",
              marginLeft: 5,
              fontSize: 18,
            }}
          >
            {userName}
          </Text>
        </View>
      </View>
      <ScrollView style={stylesDefault.ViewBody}>
        {dataFAQ.map((faq, index) => (
          <View style={styles.menu} key={index}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() =>
                setSelectedFAQ(selectedFAQ === index ? null : index)
              }
            >
              <Text style={styles.menuItemText}>{faq.title}</Text>
              <View
                style={{
                  backgroundColor: "#85d151",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,

                  height: 30,
                  width: 30,
                }}
              >
                <AntDesign
                  name={selectedFAQ !== index ? "right" : "down"}
                  size={20}
                  color="white"
                />
              </View>
            </TouchableOpacity>
            {selectedFAQ === index && (
              <View style={styles.answerContainer}>
                <Text style={styles.answer}>{faq.details}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    padding: 10,
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
    height: 120,
    width: "100%",
    paddingHorizontal: 30,
    marginBottom: -50,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
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
    width: "100%",
    marginTop: 20,
    justifyContent: "space-between",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,

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
});

export default FAQScreen;
