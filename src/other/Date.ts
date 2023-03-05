import { useState } from 'react';


  // Date
  export const date = new Date();
  export const data1 = date.toLocaleDateString()

  // day and month
  export const day = data1.split('.')[0]
  export const month = data1.substr(3).split('.')[0]
  export const year = data1.substr(6).split('.')[0]