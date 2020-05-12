import React from 'react';
import  './FAQ.css'

class FAQComponent extends React.Component {
    
    render(){
        return(
            
            <div className="FAQClass">
                <img className="FAQLogo" src='https://i.imgur.com/b0hbbKH.png' />
                <section className="question">
                    <h2 className="title" /*onClick={this.detailVisible1}*/>How do I know this really works?</h2>
                    <div className="answerWrap" /*style={{display: this.state.display1}}*/>
                        <p className="answer">
                            This really works because we have a team that is always ready in your service. We first<br/>
                            analyze your project idea. We gather, plan, and then only proceed. We will never go against<br/>
                            your plan or advice for your project. We will hold a meeting with you and describe our<br/> 
                            planning to you and then, in the end, provide desirable software, a website, or an android<br/> 
                            app to you.
                        </p>
                    </div>
                      
                </section>
                <section className="question">
                    <h2 className="title" /*onClick={this.detailVisible2}*/>I am not sure If I can trust you with my money.</h2>
                    <div className="answerWrap" /*style={{display: this.state.display2}}*/>
                        <p className="answer">
                            You can trust us with your money because we are the company registered under MCA India. 
                            We<br/> have satisfied a lot of customers. You can check on our website www.denofprojects.com. Also,<br/>
                            you can trust us because we do not rely on any third party company or firm. And moreover, we<br/> 
                            believe in building trust than software<i class="far fa-smile"></i> 
                        </p>
                    </div>
                    
                </section>
                <section className="question">
                    <h2 className="title" /*onClick={this.detailVisible3}*/>What do other people think about Den of Projects?</h2>
                    <div className="answerWrap" /*style={{display: this.state.display3}}*/>
                        <p className="answer">
                            Seeing is believing. You can check our reviews https://www.facebook.com/denofprojects/reviews/ <br/> 
                            it will give you the clear understanding what people think about us <i class="far fa-smile"></i>
                        </p>
                        
                        
                    </div>
                    
                </section>
                <section className="question">
                    <h2 className="title">I am getting same service for very little money.</h2>
                    <div className="answerWrap">
                        <p className="answer">
                            Actually, You have to pay to get our products or services. The cheap or free versions aren’t as good, you<br/> 
                            may get the service we provide for free or for very little money but then your business might have to<br/> 
                            pay the cost later. It takes a lot of hard work to provide you the software, website, or android app and<br/> 
                            hence we ask for a demand for the price.
                        </p>
                    </div>
                    
                </section>
                <section className="question">
                    <h2 className="title">I worry about sharing my information online.</h2>
                    <div className="answerWrap">
                        <p className="answer">
                            We as a company will never reveal your information to anyone. You can blindly trust us in this matter.<br/> 
                            For more information to our terms and conditions. You don’t need to worry about anything.
                        </p>
                    </div>
                </section>
                <section className="question">
                    <h2 className="title" /*onClick={this.detailVisible4}*/>What if I don’t like it? Can I get my money back?</h2>
                    <div className="answerWrap" /*style={{display: this.state.display4}}*/>
                        <p className="answer">
                            Everything we will create will be with your advice only. We will change it at least 5 times as per your<br/>
                            requirements, so there will be no chance that you will not like our services. But yet if you will not like<br/> 
                            our services you will get your money back except domain and hosting cost.
                        </p>
                    </div>
                    
                </section>
            </div>
        )
    }
    
}

export default FAQComponent;