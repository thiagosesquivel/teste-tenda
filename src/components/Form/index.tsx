import React from 'react'; 
import Select from '../Select/index';
import { Container } from './style';
import {GoLocation} from 'react-icons/'

export default function Form() {
  return (
<Container>
  <Select icon={GoLocation} />
</Container>  )
}
