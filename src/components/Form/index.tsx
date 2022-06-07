import React from 'react'; 
import Select from '../Select/index';
import { Container } from './style';
import {GoLocation} from 'react-icons/go';
import {BiUser} from 'react-icons/bi';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import Input from '../Input/index';
import Button from '../Button/index';
import Checkbox from '../Checkbox/index';


export default function Form({options}) {
  return (
<Container>
  <Select options={options} icon={GoLocation}/>
  <Input icon={BiUser} placeholder="Digite seu nome" />
  <Input icon={AiOutlineWhatsApp} placeholder="Digite seu WhatsApp"/>
  <Button conteudo="Quero uma Altea" />
  <Checkbox id="ciencia" conteudo="Concordo e estou ciente que após o envio da minha documentação para análise de crédito de financiamento imobiliário pela Caixa Econômica Federal, uma nova avaliação de financiamento somente poderá ocorrer após 90 dias contados a partir do envio das documentações, seja pela própria Tenda ou por outra construtora." />
  <Checkbox id="promocao" conteudo="Quero receber promoções exclusivas por e-mail e telefone."/>
</Container>  )
}


