import CostItem from "./CostItem";
import './CostList.css'

const CostList = (props) =>{

    if(props.costs.length === 0){
        return <p className="cost-list__fallback">В этом году расходов нет</p>
    }

    return <ul className="cost-list">
        {props.costs.map(cost => 
        <CostItem 
            key={cost.id} 
            date={cost.date} 
            description={cost.description} 
            amount={cost.amount}
        />)
        }
    </ul>
}

export default CostList;