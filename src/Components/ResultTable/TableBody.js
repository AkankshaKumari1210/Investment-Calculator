const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});


const TableBody = (props) => {
    return (
        <tbody>
            {props.data.map((yearData) => (
                <tr key={yearData.year}>
                <td>{formatter.format (yearData.year)}</td>
                <td>{formatter.format (yearData.savingsEndOfYear)}</td>
                <td>{formatter.format (yearData.yearlyInteres)}</td>
                <td>{formatter.format (yearData.savingsEndOfYear-props.initialInvestment-yearData.yearlyContribution*yearData.year)}</td>
                <td>{formatter.format (props.initialInvestment+yearData.yearlyContribution*yearData.year)}</td>
              </tr>
            ))}
          
        </tbody>

    );
}
export default TableBody;