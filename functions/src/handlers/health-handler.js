'use strict';
import HealthController from '../controllers/health-controller';
import PartnersStore from '../store/health-store';

export const healthHandler = (event, context, callback) => {
  const partnerStore = new PartnersStore();
  const healthController = new HealthController(partnerStore);
  callback(null, healthController.check());
};
