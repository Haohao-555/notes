export class Exam extends Element {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return <div class="module">
                 <style src="./views/exam/index.css"/> 
                 <div class="btn">{@"文本"}</div>
                 <div class="btn">{@"文本"}</div>
               </div>;
    }
}