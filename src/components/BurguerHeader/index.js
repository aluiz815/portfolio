import React,{useState} from 'react';

import { StyledBurguer } from './styles';
import Rightnav from '../Rightnav';
function BurguerHeader() {

  const [open,setOpen] = useState(false);

  return (
    <>
      <StyledBurguer open={open} onClick={()=>setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurguer>
      <Rightnav open={open}/>
    </>
  );
}

export default BurguerHeader;