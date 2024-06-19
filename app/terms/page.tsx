"use client"
import FooterBg from '@/app/my-components/FooterBg';
import Header from '@/app/my-components/Header';
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <div className="container">
            <div className="top py-4 text-[13px] flex gap-[10px] font-normal">
                <Link href='/' className='underline-none text-[#191C1F]'>kemea</Link>
                <img src="../images/next.svg" alt="" />
                <p className='text-[#0666EB] capitalize'>confidentialité</p>
            </div>
            

            <div className="middle-content">
                <div className="head text-center py-5">
                    <h2 className='text-[#191C1F] font-black text-[22px] uppercase py-3'>confidentialité</h2>
                    <div className="under w-[70px] h-[2px] bg-[#191C1F] mx-auto"></div>
                </div>

                <div className="text-[#191C1F] font-normal text-[15px] mt-[50px] mb-[30px] flex flex-col gap-3">
                    <p>La présente rubrique a pour objet de définir les conditions de référencement, de déférencement et de classement des annonces sur le site www.kemea.io  (« le Site ») édité par la société Digita Classifieds France (« la société DCF »).</p>
                    <p>La société DCF met à la disposition des utilisateurs du Site (« les Utilisateurs ») des services décrits dans les Conditions Générales d’Utilisation du Site, consistant à faciliter les démarches de l’Utilisateur dans son projet immobilier, en lui permettant notamment de consulter des annonces de biens immobiliers sur le Site et d’entrer le cas échéant en relation avec les auteurs de ces annonces (« les Annonceurs »).</p>
                    <p>La société DCF ne garantit pas la conclusion de relation contractuelle entre l’Utilisateur et lesdits Annonceurs et n’intervient à ce titre à aucun moment dans les échanges et transactions entre les Utilisateurs et les Annonceurs et n’intervient pas en tant que médiateur entre les Utilisateurs et les Annonceurs.</p>
                </div>
                <div className="listing text-[#191C1F] font-normal text-[14px]">
                    <p><b>1. RÉFÉRENCEMENT ET DERÉFÉRENCEMENT DES ANNONCEURS :</b></p>
                    <div className="my-5">
                        <p>(i) Référencement des Annonceurs :</p>
                        <p>La diffusion d’annonces sur le Site est réservée aux Annonceurs définis ci-dessous :</p>
                        <p>(i) Annonceurs professionnels ayant souscrit à titre payant un contrat de diffusion d’annonces de vente de biens immobiliers avec la société DCF et entrant dans l’une des catégories suivantes :</p>
                        <ul className='list-disc'>
                            <li>les professionnels de l’immobilier détenant une carte de transaction ou de gestion conformément à la loi Hoguet n° 70-9 du 2 janvier 1970,</li>
                            <li>les notaires,</li>
                            <li>les avocats exerçant à titre accessoire l’activité de mandataire en transactions immobilières,</li>
                            <li>les huissiers,</li>
                            <li>les promoteurs immobiliers,</li>
                            <li>les constructeurs.</li>
                        </ul>
                    </div>
                    <div className="my-5">
                        <p>(ii) Référencement des Annonces :</p>
                        <p>Pour être référencée sur le Site et donc diffusée, une Annonce doit impérativement respecter les règles décrites ci-dessous.</p>
                        <p className="py-4 px-8 underline">
                            Contenu de l’Annonce
                        </p>
                        <p>Le bien doit être diffusé dans sa catégorie et être conforme aux produits de diffusion souscrits par l’Annonceur. Sur le Site, l’Annonce ne peut porter que sur :</p>
                        <div className="px-8">
                            <p>- la vente et la location de biens anciens, ayant déjà fait l’objet d’un transfert de propriété;</p>
                            <p>- la vente de lots associés à des programmes immobiliers neufs, n’ayant pas encore fait l’objet d’un transfert de propriété.</p>
                        </div>
                        <Link href='' className='flex items-center lg:justify-between md:justify-between justify-center lg:w-full md:w-full w-[90%] text-[#0000EE] font-medium underline py-4'>https://support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger</Link>

                        <p className="py-4 px-8 underline">
                            Contenu interdit au sein d’une Annonce
                        </p>
                        <p>Toute Annonce contenant des éléments qui sembleraient contraires aux dispositions légales ou réglementaires, aux bonnes mœurs, aux règles de diffusion de notre Site ou susceptible de heurter les utilisateurs sera immédiatement refusée par la société DCF, donc non référencée sur le Site.</p>
                        <p>Est notamment strictement interdit :</p>
                        <ul className='list-disc px-8'>
                            <li>Tout contenu rédigé en langue étrangère comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu portant sur un bien immobilier ou programme de construction fictif ;</li>
                            <li>Tout contenu frauduleux, ou visant à tromper l’Utilisateur ;</li>
                            <li>Tout contenu à caractère politique, religieux ou haineux ;</li>
                            <li>Tout contenu à caractère promotionnel et/ou publicitaire ;</li>
                            <li>Toute image ou photographie sans lien avec l’offre proposée, non autorisée, contrefaisante, ou encore à caractère pornographique.</li>
                        </ul>

                        <div className="text-[#191C1F] font-normal text-[15px] mt-[50px] mb-[30px] flex flex-col gap-3">
                            <p className='underline underline-offset-2'>(iii) Déréférencement des Annonces et Annonceurs :</p>
                            <p>En cas de non-respect par l’Annonceur de ses engagements contractuels et / ou de la réglementation en vigueur et en particulier celle applicable aux Annonceurs professionnels de l’immobilier et/ou des règles de référencement décrites ci-dessus et de la Charte de diffusion accessible ici, la société DCF se réserve le droit, de refuser ou de bloquer la publication d’Annonces et / ou de suspendre le compte ou de résilier le contrat de l’Annonceur, sans notification préalable le cas échéant.</p>
                            <p>La suppression puis la création, à l’identique, des mêmes Annonces immobilières est strictement interdite. La société DCF se réserve ainsi le droit de les déréférencer et/ou de suspendre le compte ou de résilier le contrat de l’Annonceur en cas de réitération.</p>
                            <p>De même, dans le cas où la société DCF, en sa qualité d’hébergeur de l’Annonce, devait être rendue destinataire d’un signalement ou d’une notification émanant d’une autorité nationale ou européenne, lui faisant part du caractère manifestement illicite et/ou frauduleux de l’Annonce, celle-ci se réserve le droit, sans notification préalable, de bloquer la publication de l’Annonce ou de suspendre ou de supprimer le compte de l’Annonceur et de résilier son contrat.</p>
                            <p>Il en est notamment ainsi dans l’hypothèse où l’Annonceur (i) ne disposerait pas des droits de propriété intellectuelle sur le contenu de l’Annonce et/ou (ii) ne disposerait pas de la propriété et/ou jouissance du bien et/ou le cas échéant, des autorisations requises, en particulier du propriétaire du bien, en vue de la diffusion de l’Annonce présentant le bien.</p>
                        </div>

                        <div className="text-[#191C1F] font-normal text-[15px] mt-[50px] mb-[30px] flex flex-col gap-3">
                            <p className='underline underline-offset-2'>(iv) Signalement de contenu illégal :</p>
                            <p>DCF permet aux Utilisateurs de son Site de signaler tout contenu illégal, telle qu’une arnaque, une tentative de fraude, un comportement suspect, une contrefaçon ou encore toute infraction aux dispositions légales et réglementaires. Ces signalements peuvent être envoyés directement à la société DCF depuis la page de l’Annonce ou de l’Annonceur.</p>
                        </div>
                    </div>
                </div>

                <div className="listing text-[#191C1F] font-normal text-[14px]">
                    <p><b>1. RÉFÉRENCEMENT ET DERÉFÉRENCEMENT DES ANNONCEURS :</b></p>
                    <div className="my-5">
                        <p>(i) Référencement des Annonceurs :</p>
                        <p>La diffusion d’annonces sur le Site est réservée aux Annonceurs définis ci-dessous :</p>
                        <p>(i) Annonceurs professionnels ayant souscrit à titre payant un contrat de diffusion d’annonces de vente de biens immobiliers avec la société DCF et entrant dans l’une des catégories suivantes :</p>
                        <ul className='list-disc'>
                            <li>les professionnels de l’immobilier détenant une carte de transaction ou de gestion conformément à la loi Hoguet n° 70-9 du 2 janvier 1970,</li>
                            <li>les notaires,</li>
                            <li>les avocats exerçant à titre accessoire l’activité de mandataire en transactions immobilières,</li>
                            <li>les huissiers,</li>
                            <li>les promoteurs immobiliers,</li>
                            <li>les constructeurs.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <FooterBg />
    </div>
  )
}

export default page
