import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'

export default function Team({ data }) {
    // intro
    const intro = data.intro;
    const intro_heading = intro.heading;
    const intro_content = intro.rich_editor;
    const intro_buttons = intro.buttons;

    // team
    const team = data.team;

    return (
        <section className="block block__team">
            <div className="container">
                <div className="team__intro">
                    <div>
                        {intro_heading && (
                            <h2 className="section-heading">{intro_heading}</h2>
                        )}

                        { intro_content && (
                            <Text className={ clsx('') }>
                                { intro_content }
                            </Text>
                        )}
                    </div>

					{intro_buttons && (
						<Buttons buttons={intro_buttons} className={ clsx('') } />
                    )}
                </div>

                <div className="team__grid">
                    {team.length > 0 &&
                        team.map((item, i) => {
                            const team_picture = item.team_member.image;
                            const name = item.team_member.name;
                            const job_role = item.team_member.job_role;
                            const linkedin = item.team_member.linkedin;
                            const bio = item.team_member.bio;

                            return (
                                <div className={clsx('team__member') }>
                                    {team_picture && (    
                                        <Image src={team_picture} alt={""} className="" />
                                    )}
                                    <div>
                                        {name && (
                                            <h3>{name}</h3>
                                        )}

                                        {linkedin && (
                                            <a href={linkedin} rel="noreferrer noopener" target="_blank">
                                                <svg width="100px" height="101px" viewBox="0 0 100 101" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="4202085_linkedin_logo_social_social-media_icon" transform="translate(0.000000, 0.000000)" fill="#E0FF02" fill-rule="nonzero">
                                                            <rect id="Rectangle" x="0.0830543933" y="31.4393305" width="22.325523" height="68.8221757"></rect>
                                                            <path d="M83.2194561,32.2464435 C82.9824268,32.1721757 82.7577406,32.0910042 82.5089958,32.0209205 C82.208159,31.9525105 81.9096234,31.8953975 81.6035565,31.8466527 C80.4190377,31.6083682 79.1192469,31.4393305 77.5976987,31.4393305 C64.5828452,31.4393305 56.3261506,40.93159 53.6073222,44.5972803 L53.6073222,31.4393305 L31.28159,31.4393305 L31.28159,100.261506 L53.607113,100.261506 L53.607113,62.7223849 C53.607113,62.7223849 70.4780335,39.1600418 77.5974895,56.4648536 L77.5974895,100.261506 L99.9171548,100.261506 L99.9171548,53.8194561 C99.9171548,43.4202929 92.8094142,34.7552301 83.2194561,32.2464435 L83.2194561,32.2464435 Z" id="Path"></path>
                                                            <path d="M21.9223849,11.1056485 C21.9223849,17.1535565 17.032636,22.0548117 11.0029289,22.0548117 C4.97280335,22.0548117 0.0832635983,17.1533473 0.0832635983,11.1056485 C0.0832635983,5.05899582 4.97280335,0.156903766 11.0029289,0.156903766 C17.032636,0.156903766 21.9223849,5.05899582 21.9223849,11.1056485 L21.9223849,11.1056485 Z" id="Path"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    {job_role && (
                                        <p>{job_role}</p>
                                    )}

                                    {bio && (
                                        <button>
                                            Read bio
                                            <svg width="40px" height="18px" viewBox="0 0 40 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="Home-Concept-1" transform="translate(-295.000000, -689.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                        <g id="Group-2" transform="translate(84.000000, 148.000000)">
                                                            <g id="CTA" transform="translate(0.000000, 519.000000)">
                                                                <g id="right-arrow-(8)" transform="translate(211.000000, 22.000000)">
                                                                    <path d="M29.4326576,10 L0.566775614,9.95982362 C0.253754086,9.95982362 0,9.52110216 0,8.97991181 C0,8.43872146 0.253754086,8 0.566775614,8 L29.4332244,8.04017638 C29.7462459,8.04017642 30,8.47889787 30,9.02008819 C30,9.56127852 29.7462459,10 29.4332244,10 L29.4326576,10 Z" id="Path"></path>
                                                                    <path d="M40,9.01182654 C34.6844444,10.9986859 28.0879532,14.3971616 24,18 L27.2243275,9.00047306 L24.0121637,0 C28.0963743,3.60756899 34.6872515,7.01361367 40,9.01182654 Z" id="Path"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}