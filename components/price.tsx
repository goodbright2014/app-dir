const Price = ({
  amount,
  currencyCode = 'USD',
  ...props
}: {
  amount: string;
  currencyCode: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} {...props}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))} `}
    원
  </p>
);

export default Price;
