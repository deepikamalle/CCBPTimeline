import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView
