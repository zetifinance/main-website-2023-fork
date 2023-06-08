import clsx from 'clsx';
import React, { useState } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import Image from '../resolvers/Image';

export default function Team({ data }) {
  // Intro
  const intro = data?.intro;
  const intro_heading = intro?.heading;
  const intro_content = intro?.rich_editor;
  const intro_buttons = intro?.buttons;

  // Team
  const team = data?.team;

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    const TeamModal = ({ isOpen, data }) => {
        if (!isOpen) {
            return null;
        }

        return (
            <div className="modal">
                <div className="modal__inner modal__inner--team">
                    <button onClick={closeModal} className="modal__close"></button>
                    <div className="modal__image">
                        <Image src={data?.image} alt="" className="" />
                    </div>
                    <div className="modal__content">

                        <div>
                            {data?.name && 
                                <h3>{data?.name}</h3>
                            }

                            {data?.linkedin && (
                                <a href={data?.linkedin} rel="noreferrer noopener" target="_blank">
                                    {/* LinkedIn SVG */}
                                </a>
                            )}
                        </div>
                        
                        {data?.job_role && 
                            <p>{data?.job_role}</p>
                        }

                        {data?.bio && (
                            <Text className={clsx('')}>
                                {data?.bio}
                            </Text>
                        )}
                    </div>
                </div>
            </div>
        );
    };

  return (
    <section className="block block__team">
      <div className="container">
        <div className="team__intro">
          <div>
            {intro_heading && <h2 className="section-heading section-heading--left">{intro_heading}</h2>}

            {intro_content && (
              <Text className={clsx('')}>
                {intro_content}
              </Text>
            )}
          </div>

          {intro_buttons && (
            <Buttons buttons={intro_buttons} className={clsx('')} />
          )}
        </div>

        <div className="team__grid">
          {team?.length > 0 &&
            team?.map((item, i) => {
              const team_picture = item?.team_member?.image;
              const name = item?.team_member?.name;
              const job_role = item?.team_member?.job_role;
              const linkedin = item?.team_member?.linkedin;
              const bio = item?.team_member?.bio;

              return (
                <div className={clsx('team__member')} key={i}>
                  {team_picture && (
                    <Image src={team_picture} alt="" className="" />
                  )}
                  <div>
                    {name && <h3>{name}</h3>}

                    {linkedin && (
                      <a href={linkedin} rel="noreferrer noopener" target="_blank">
                        {/* Update */}
                        {/* LinkedIn SVG */}
                      </a>
                    )}
                  </div>
                  {job_role && <p>{job_role}</p>}

                  {bio && (
                    <button onClick={() => openModal(item?.team_member)}>
                      <span>Read bio</span>
                      {/* Update */}
                      {/* Button SVG */}
                    </button>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      <TeamModal isOpen={isModalOpen} data={modalData} />
    </section>
  );
}
