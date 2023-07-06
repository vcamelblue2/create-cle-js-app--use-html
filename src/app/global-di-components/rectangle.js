import { ComponentsRegistry, str, str_ } from "cle.js/lib";

ComponentsRegistry.define({ GDI_Rectangle: { // can be any name..

  '=>': "i'm a Rectangle", 

  style: { 
    display: str.flex, alignItems: str.center, justifyContent: str.center, textAlign: str.center,
    color: str.black, 
    cursor: str.pointer,
    backgroundColor: '#ccc',
    width: '200px',
    height: '200px',
    borderRadius: str_._5px  // equivalent to borderRadius: " 5px"
  }

}}, "div") // the root will be a div


/* * * * * * * * * * * * * * * * * * * * * * * * 

usage in standard components:
 
 { component_GDI_Rectangle: {}}
 { 'component-GDI_Rectangle': {}}

 { use_GDI_Rectangle: {..overrides..}}  OR  { use_GDI_Rectangle: [{..overrides..}, ...other "Use" func args]}
 { 'use-GDI_Rectangle': {..overrides..}}  OR  { 'use-GDI_Rectangle': [{..overrides..}, ...other "Use" func args]}

 { extended_GDI_Rectangle: {..overrides..}}  OR  { extended_GDI_Rectangle: [{..overrides..}, ...other "Extended" func args]}
 { 'extended-GDI_Rectangle': {..overrides..}}  OR  { 'extended-GDI_Rectangle': [{..overrides..}, ...other "Extended" func args]}

or via "cle"

 cle.component_GDI_Rectangle()
 cle.use_GDI_Rectangle({...})
 cle.extended_GDI_Rectangle({...})

* * * * * * * * * * * * * * * * * * * * * * * * */