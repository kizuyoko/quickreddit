const thousandToK = (number: number): string | number => {
  return number >= 1000 
    ? (number / 1000).toFixed(1) + 'K'
    : number;
};

export default thousandToK;