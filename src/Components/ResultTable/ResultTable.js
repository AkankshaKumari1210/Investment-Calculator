import TableBody from "./TableBody";
import TableHead from "./TableHead";
import classes from './ResultTable.module.css';



const ResultTable = (props) => {
    return (
        <table className={classes.result}>
            <TableHead />
            <TableBody />

        </table>

    );
}
export default ResultTable;