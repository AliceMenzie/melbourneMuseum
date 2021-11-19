import React from "react";
import { useQuery } from "graphql-hooks";
import { Image } from "react-datocms";

export default function Events() {
  const EVENT_QUERY = `{
    allEvents {
      eventDescription
      eventName
      dateOfEvent
      id
      tags
      mainEventImage {
      width
      alt
      title
      responsiveImage {
        alt
        base64
        bgColor
        title
        src
        srcSet
        sizes
        height
        webpSrcSet
        width
        aspectRatio
      }
    }
    }
  }`;

  const { loading, error, data } = useQuery(EVENT_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return "Loading...";
  if (error) return "Error: Something Bad Happened";

  console.log(data.allEvents);

  return (
    <div>
      <h1>EVENTS</h1>
      <div className="events-container">
        {data.allEvents.map((event) => (
          <div className="event" key={event.id}>
            <Image
              className="event-img"
              data={event.mainEventImage.responsiveImage}
            />
            
              <ul className="tags">
                  {event.tags.kidFriendly ? <li className="li-tag"> Kid Friendly </li> : null }
                  {event.tags.interactive ? <li className="li-tag"> Interactive </li> : null }
                  {event.tags.immersive ? <li className="li-tag"> Immersive </li> : null }
                  {event.tags.adultsOnly ? <li className="li-tag"> Adults Only </li> : null }
              </ul>
            
            <h3 className="event-heading">{event.eventName}</h3>
            {/* <h4>{data.event.dateOfEvent}</h4> */}
            <div className="event-details">{event.eventDescription}</div>
            <button>Buy Tickets</button>
          </div>
        ))}
      </div>
    </div>
  );
}
