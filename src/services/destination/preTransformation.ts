import { Context } from 'koa';
import { ProcessorTransformationRequest, RouterTransformationRequestData } from '../../types/index';
import { DynamicConfigParser } from '../../util/dynamicConfigParser';
import { oncehubTransformer } from '../../util/oncehub-custom-transformer';

export class DestinationPreTransformationService {
  public static preProcess(
    events: ProcessorTransformationRequest[] | RouterTransformationRequestData[],
    ctx: Context,
  ) {
    const reqParams = ctx.request.query;
    const eventsProcessed = events.map(
      (event: ProcessorTransformationRequest | RouterTransformationRequestData) => {
        // look for traits under every object in file v0\util\data\GenericFieldMapping.json like
        // "traits": ["traits", "context.traits"]
        const destination = event?.destination?.DestinationDefinition?.Name;
        let parsedEvent = oncehubTransformer(destination, event);
        if (parsedEvent) {
          parsedEvent.request = { query: reqParams };
        }
        return parsedEvent;
      },
    );
    // Filter out any undefined or null events after processing
    // This is important to ensure that we only return valid events to the next step in the pipeline
    const filteredEvents = eventsProcessed.filter((event: any) => !!event);

    return filteredEvents;
  }
}
