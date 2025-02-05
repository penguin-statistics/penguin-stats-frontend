<template>
  <v-card
    color="background"
    elevation="9"
  >
    <v-card-title>
      <ItemIcon
        :item="item"
        :ratio="0.5"
      />
      <span class="title ml-2">
        {{ item.name || item.itemId || $t('item.undefined') }}
      </span>
    </v-card-title>
    <v-card-text v-if="stats.data.length && !disabledOverview">
      <v-simple-table dense>
        <thead>
          <tr>
            <th>
              {{ $t('stats.headers.stage') }}
            </th>
            <th class="font-weight-bold">
              {{ $t('stats.headers.percentage') }}
              <v-icon small>
                mdi-sort-descending
              </v-icon>
            </th>
            <th>
              {{ $t('stats.headers.apPPR') }}
            </th>
            <th>
              <small>{{ $t('stats.headers.quantity') }}</small>
              / {{ $t('stats.headers.times') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="stat in stats.data"
            :key="stat.stageId"
            class="monospace"
            :class="{'orange--text font-weight-bold': highlight === stat.stageId}"
          >
            <td>
              <v-icon
                v-if="highlight === stat.stageId"
                color="orange"
                small
                class="mr-1"
              >
                mdi-arrow-right-circle
              </v-icon>
              <v-icon
                :color="highlight === stat.stageId ? 'orange' : ''"
                small
              >
                {{ stat.zone.icon }}
              </v-icon>
              {{ stat.stageCode }}
            </td>
            <td>
              {{ stat.percentageText }}
            </td>
            <td>
              {{ stat.apPPR }}
            </td>
            <td>
              <small>{{ stat.quantity | thousandSeparator }}</small> / {{ stat.times | thousandSeparator }}
            </td>
          </tr>
          <tr
            v-if="stats.more > 0"
            style="background: inherit !important;"
          >
            <td
              colspan="4"
              class="text-center"
            >
              <v-icon color="grey">
                mdi-dots-horizontal
              </v-icon>

              <span class="degraded-opacity caption">
                {{ $t('stats.itemPreview.more', {count: stats.more}) }}
              </span>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import get from '@/utils/getters'
import ItemIcon from '@/components/global/ItemIcon'
import existUtils from '@/utils/existUtils'
import strings from '@/utils/strings'
import config from '@/config'

const pagination = config.previewCard.item.pagination

export default {
  name: 'PreviewItemCard',
  components: {ItemIcon},
  props: {
    itemId: {
      type: String,
      default: () => ""
    },
    disabledOverview: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    item() {
      const item = get.items.byItemId(this.itemId)
      return {
        ...item,
        name: strings.translate(item, 'name')
      }
    },
    stats() {
      if (this.disabledOverview) return {data: [], more: 0}
      const data = get.statistics.byItemId(this.itemId)
          // filter out stages that have too less samples
          .filter(el => el.times > 100)
          // only open stages, and item must still be droppable now
          .filter(el => existUtils.existence(el.stage, true) && (el.end === null || el.end > Date.now()))

          .sort((a, b) => b.percentage - a.percentage)

      return {
        data: data
            .slice(0, pagination)
            .map(el => {
              return {
                ...el,
                stageCode: strings.translate(el.stage, 'code')
              }
            }),
        more: data.length - pagination
      }
    },
    highlight() {
      return this.$route.params.stageId
    }
  }
}
</script>

<style scoped>

</style>
