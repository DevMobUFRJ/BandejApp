import { PopSection, PopLink, PopSubtitle } from "./style";

type credito = {
    versao: string;
    prof: string;
    devs: Array<Array<string>>;
    des: Array<Array<string>>;
}

const creditos: Array<credito> = [
    {
        versao: '',
        prof: 'Silvana Rossetto',
        devs: [
            ['Iago Cesar T. de Souza', 'https://github.com/14g0'],
            ['Carlos Eduardo Schuller Banjar', 'https://github.com/carloseduardobanjar'],
            ['Gabriel Ferreira Leão', '#'],
            ['Vitoria Nazareth', '#']
        ],
        des:[
            ['Brenda Franco', 'https://www.behance.net/brendafr'],
            ['Kaylane Lomeu', 'https://www.behance.net/lanelomeu'],
            ['Nicole Araújo', '#']
        ]
    }
]

export default function Creditos() {
    return (
        <div>
            {
                creditos.map((credito, index) => 
                    <div key={index}> {/* Não sei porque de tanto <>, mas o TS reclamou */}
                        <PopSection>
                            <PopSubtitle>COORDENAÇÃO</PopSubtitle>
                            <PopLink>{credito.prof}</PopLink>
                        </PopSection>

                        <PopSection>
                            <PopSubtitle>DESENVOLVEDORES</PopSubtitle>
                            {credito.devs.map((dev, index) => 
                                <PopLink key={index} href={dev[1]}
                                onClick={(e) => { if(dev[1] === '#') e.preventDefault(); }}>
                                    {dev[0]}
                                    <br/>
                                </PopLink>
                            )}
                        </PopSection>

                        <PopSection>
                            <PopSubtitle>DESIGNERS</PopSubtitle>
                            {credito.des.map((des, index) => 
                                <PopLink key={index} href={des[1]}>{des[0]}</PopLink>
                            )}
                        </PopSection>
                    </div>
                )
            }
        </div>
    );
}