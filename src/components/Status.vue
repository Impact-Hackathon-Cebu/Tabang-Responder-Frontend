<template>
  <Timeline>
        <TimelineItem>
            <p class="time">Notified the respondent</p>
            <p class="content">Respondent name</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">Respondent accepted</p>
            <!-- <p class="content">发布 Macintosh</p> -->
        </TimelineItem>
        <TimelineItem>
            <p class="time">Respondent is on the way</p>
            <!-- <p class="content">发布 iPhone</p> -->
        </TimelineItem>
        <TimelineItem>
            <p class="time">Respondent arrived</p>
            <!-- <p class="content">发布 iPad</p> -->
        </TimelineItem>
        <!-- <TimelineItem>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem> -->
    </Timeline>
</template>

<script>
export default {

}
</script>

<style scoped>
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
</style>