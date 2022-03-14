/* class Card extends React.Component{

    constructor(props) {
        super(props);

        this.state {
            couter: 0
        }
    }


    componentDidMount() {
        // only once
    }

    componentDidUpdate() {
        // multiple times
    }

    componentWillUnmount() {
        // only once
    }    


    <div>
        <div>
            <div>
                
            </div>
        </div>
    </div>


    render() {



    }

} */

let arr = [1,2,5,9];

/* let sum = arr.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
})
console.log('sum:', sum) */

Array.prototype.doReduce = function (callback) {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += callback(0, this[i]);
    }
    return sum;
};

let sum = arr.doReduce((prevValue, currentValue) => {
    console.log('prevValue:', prevValue)
    return prevValue + currentValue;
});
console.log('sum:', sum)


/* let sum = arr.doReduce((prevValue, currValue) => {
    return prevValue + currValue;
});
console.log('sum:', sum) */
