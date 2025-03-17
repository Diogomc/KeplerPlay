import '@/components/plans/plans.css';
export const Plans = () => {
    return (
        <div className="container-plans">
            <h2 className='text-5xl p-20 text-center'>Conheça nossos planos</h2>
            <div className="plans-list">

                <div className='plans-cards'>
                    <h2 className='title-plan-card'>Semanal</h2>
                    <div className="benefits">
                        <p className='benefits-text'>2 dispositivos ao mesmo tempo</p>
                        <p className='benefits-text'>Resolução full hd</p>
                    </div>
                    <div className="price">
                        <p className='price-text'>2x R$15,90</p>
                        <p className='price-text'>Preço total a vista R$27,90</p>
                        <div className="flex justify-center">
                            <button className="btn-plan"><a href="#">Escolher esse plano</a></button>
                        </div>
                    </div>
                </div>

                <div className='plans-cards'>
                    <h2 className='title-plan-card'>Mensal</h2>
                    <div className="benefits">
                        <p className='benefits-text'>2 dispositivos ao mesmo tempo</p>
                        <p className='benefits-text'>Resolução full hd</p>
                        <p className='benefits-text'>Acesso ao Brasileirão</p>
                    </div>
                    <div className="price">
                        <p className='price-text'>2x R$25,90</p>
                        <p className='price-text'>Preço total a vista R$47,90</p>
                        <div className="flex justify-center">
                            <button className="btn-plan"><a href="#">Escolher esse plano</a></button>
                        </div>
                    </div>
                </div>

                <div className='plans-cards'>

                    <h2 className='title-plan-card'>Anual</h2>
                    <div className="benefits">
                        <p className='benefits-text'>5 dispositivos ao mesmo tempo</p>
                        <p className='benefits-text'>Resolução 4K</p>
                        <p className='benefits-text'>Acesso ao Brasileirão</p>
                        <p className='benefits-text'>Acesso a Champions League</p>
                    </div>
                    <div className="price">
                        <p className='price-text'>12x R$42,50<span className='month'>/mês</span></p>
                        <p className='price-text'>Preço total a vista R$480,00</p>
                        <div className="flex justify-center">
                            <button className="btn-plan"><a href="#">Escolher esse plano</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}