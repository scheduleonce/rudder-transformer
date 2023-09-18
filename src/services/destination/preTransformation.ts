import { Context } from 'koa';
import { ProcessorTransformationRequest, RouterTransformationRequestData } from '../../types/index';
import { DynamicConfigParser } from '../../util/dynamicConfigParser';
import { oncehubTransformer } from '../../util/oncehub-custom-transformer';

export default class PreTransformationDestinationService {
  public static preProcess(
    events: ProcessorTransformationRequest[] | RouterTransformationRequestData[],
    ctx: Context,
  ) {
    const reqParams = ctx.request.query;
    const destination = ctx.params.destination;
    events = events.map(
      (event: ProcessorTransformationRequest | RouterTransformationRequestData) => {
        event = oncehubTransformer(destination,event);
        event.request = { query: reqParams };
        return event;
      },
    );
    return events;
  }
}
