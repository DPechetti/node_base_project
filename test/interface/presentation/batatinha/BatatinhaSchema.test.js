const BatatinhaSchema = require('../../../../src/interface/presentation/batatinha/BatatinhaSchema');
const generateBatatinhaRequest = require('../../../mocks/batatinha/generateBatatinhaRequest');

describe('BatatinhaSchema', () => {
  const batatinha = generateBatatinhaRequest();

  describe('#common', () => {
    describe('#headers', () => {
      let data, headers;

      beforeEach(() => {
        const { batatinha_header } = batatinha;
        data = {
          batatinha_header
        };

        headers = BatatinhaSchema().common.headers;
      });

      test('Should return the validated object', () => {
        const { error } = headers.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error whe batatinha header is not passed', () => {
        const { error } = headers.validate({});

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_header" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_header');
        expect(error.details[0].message).toStrictEqual('"batatinha_header" is required');
      });

      test('Should return error whe batatinha header is empty', () => {
        const { error } = headers.validate({ batatinha_header: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_header" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_header');
        expect(error.details[0].message).toStrictEqual('"batatinha_header" is not allowed to be empty');
      });

      test('Should return error whe batatinha header is invalid', () => {
        const { error } = headers.validate({ batatinha_header: 'invalid_guid' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_header" must be a valid GUID');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_header');
        expect(error.details[0].message).toStrictEqual('"batatinha_header" must be a valid GUID');
      });
    });
  });

  describe('#createBatatinha', () => {
    describe('#body', () => {
      let data, body;

      beforeEach(() => {
        const { batatinha_name, batatinha_email } = batatinha;
        data = {
          batatinha_name,
          batatinha_email
        };

        body = BatatinhaSchema().createBatatinha.body;
      });

      test('Should return the validated object', () => {
        const { error } = body.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error when batatinha name is not passed', () => {
        const { error } = body.validate({});

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message).toStrictEqual('"batatinha_name" is required');
      });

      test('Should return error whe batatinha name is empty', () => {
        const { error } = body.validate({ batatinha_name: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message).toStrictEqual('"batatinha_name" is not allowed to be empty');
      });

      test('Should return error whe batatinha name length is less than 3', () => {
        const { error } = body.validate({ batatinha_name: 'hi' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" length must be at least 3 characters long');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message).toStrictEqual('"batatinha_name" length must be at least 3 characters long');
      });

      test('Should return error whe batatinha name length is greater than 50', () => {
        const { error } = body.validate({ batatinha_name: 'a'.repeat(51) });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" length must be less than or equal to 50 characters long');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message)
          .toStrictEqual('"batatinha_name" length must be less than or equal to 50 characters long');
      });

      test('Should return error whe batatinha email is not passed', () => {
        const { error } = body.validate({ batatinha_name: 'batatinha_name' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_email" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_email');
        expect(error.details[0].message).toStrictEqual('"batatinha_email" is required');
      });

      test('Should return error whe batatinha email is empty', () => {
        const { error } = body.validate({ batatinha_name: 'batatinha_name', batatinha_email: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_email" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_email');
        expect(error.details[0].message).toStrictEqual('"batatinha_email" is not allowed to be empty');
      });

      test('Should return error whe batatinha email is invalid', () => {
        const { error } = body.validate({ batatinha_name: 'batatinha_name', batatinha_email: 'invalid_email' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_email" must be a valid email');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_email');
        expect(error.details[0].message).toStrictEqual('"batatinha_email" must be a valid email');
      });
    });
  });

  describe('#listBatatinha', () => {
    describe('#query', () => {
      let data, query;

      beforeEach(() => {
        data = {
          page: '1',
          limit: '10'
        };

        query = BatatinhaSchema().listBatatinha.query;
      });

      test('Should return the validated object when all arguments are passed', () => {
        const { error } = query.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return the validated object when only page is passed', () => {
        const { error } = query.validate({ page: data.page });

        expect(error).toStrictEqual(undefined);
      });

      test('Should return the validated object when only limit is passed', () => {
        const { error } = query.validate({ limit: data.limit });

        expect(error).toStrictEqual(undefined);
      });

      test('Should return the validated object when arguments are not passed', () => {
        const { error } = query.validate();

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error whe page id is empty', () => {
        const { error } = query.validate({ page: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"page" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('page');
        expect(error.details[0].message).toStrictEqual('"page" is not allowed to be empty');
      });

      test('Should return error whe limit id is empty', () => {
        const { error } = query.validate({ limit: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"limit" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('limit');
        expect(error.details[0].message).toStrictEqual('"limit" is not allowed to be empty');
      });

      test('Should return error whe page id is invalid', () => {
        const { error } = query.validate({ page: 'string' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"page" with value "string" fails to match the required pattern: /^[0-9]*$/');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('page');
        expect(error.details[0].message).toStrictEqual('"page" with value "string" fails to match the required pattern: /^[0-9]*$/');
      });

      test('Should return error whe limit id is invalid', () => {
        const { error } = query.validate({ limit: 'string' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"limit" with value "string" fails to match the required pattern: /^[0-9]*$/');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('limit');
        expect(error.details[0].message).toStrictEqual('"limit" with value "string" fails to match the required pattern: /^[0-9]*$/');
      });
    });
  });

  describe('#getBatatinha', () => {
    describe('#params', () => {
      let data, params;

      beforeEach(() => {
        const { batatinha_id } = batatinha;
        data = {
          batatinha_id
        };

        params = BatatinhaSchema().getBatatinha.params;
      });

      test('Should return the validated object', () => {
        const { error } = params.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error whe batatinha id is not passed', () => {
        const { error } = params.validate({});

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" is required');
      });

      test('Should return error whe batatinha id is empty', () => {
        const { error } = params.validate({ batatinha_id: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" is not allowed to be empty');
      });

      test('Should return error whe batatinha id is invalid', () => {
        const { error } = params.validate({ batatinha_id: 'invalid_guid' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" must be a valid GUID');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" must be a valid GUID');
      });
    });
  });

  describe('#updateBatatinha', () => {
    describe('#params', () => {
      let data, params;

      beforeEach(() => {
        const { batatinha_id } = batatinha;
        data = {
          batatinha_id
        };

        params = BatatinhaSchema().updateBatatinha.params;
      });

      test('Should return the validated object', () => {
        const { error } = params.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error whe batatinha id is not passed', () => {
        const { error } = params.validate({});

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" is required');
      });

      test('Should return error whe batatinha id is empty', () => {
        const { error } = params.validate({ batatinha_id: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" is not allowed to be empty');
      });

      test('Should return error whe batatinha id is invalid', () => {
        const { error } = params.validate({ batatinha_id: 'invalid_guid' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" must be a valid GUID');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" must be a valid GUID');
      });
    });

    describe('#body', () => {
      let data, body;

      beforeEach(() => {
        const { batatinha_name, batatinha_email } = batatinha;
        data = {
          batatinha_name,
          batatinha_email
        };

        body = BatatinhaSchema().updateBatatinha.body;
      });

      test('Should return the validated object', () => {
        const { error } = body.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error when batatinha name is not passed', () => {
        const { error } = body.validate({});

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message).toStrictEqual('"batatinha_name" is required');
      });

      test('Should return error whe batatinha name is empty', () => {
        const { error } = body.validate({ batatinha_name: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message).toStrictEqual('"batatinha_name" is not allowed to be empty');
      });

      test('Should return error whe batatinha name length is less than 3', () => {
        const { error } = body.validate({ batatinha_name: 'hi' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" length must be at least 3 characters long');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message).toStrictEqual('"batatinha_name" length must be at least 3 characters long');
      });

      test('Should return error whe batatinha name length is greater than 50', () => {
        const { error } = body.validate({ batatinha_name: 'a'.repeat(51) });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_name" length must be less than or equal to 50 characters long');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_name');
        expect(error.details[0].message)
          .toStrictEqual('"batatinha_name" length must be less than or equal to 50 characters long');
      });

      test('Should return error whe batatinha email is not passed', () => {
        const { error } = body.validate({ batatinha_name: 'batatinha_name' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_email" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_email');
        expect(error.details[0].message).toStrictEqual('"batatinha_email" is required');
      });

      test('Should return error whe batatinha email is empty', () => {
        const { error } = body.validate({ batatinha_name: 'batatinha_name', batatinha_email: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_email" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_email');
        expect(error.details[0].message).toStrictEqual('"batatinha_email" is not allowed to be empty');
      });

      test('Should return error whe batatinha email is invalid', () => {
        const { error } = body.validate({ batatinha_name: 'batatinha_name', batatinha_email: 'invalid_email' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_email" must be a valid email');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_email');
        expect(error.details[0].message).toStrictEqual('"batatinha_email" must be a valid email');
      });
    });
  });

  describe('#deleteBatatinha', () => {
    describe('#params', () => {
      let data, params;

      beforeEach(() => {
        const { batatinha_id } = batatinha;
        data = {
          batatinha_id
        };

        params = BatatinhaSchema().deleteBatatinha.params;
      });

      test('Should return the validated object', () => {
        const { error } = params.validate(data);

        expect(error).toStrictEqual(undefined);
      });

      test('Should return error whe batatinha id is not passed', () => {
        const { error } = params.validate({});

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" is required');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" is required');
      });

      test('Should return error whe batatinha id is empty', () => {
        const { error } = params.validate({ batatinha_id: '' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" is not allowed to be empty');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" is not allowed to be empty');
      });

      test('Should return error whe batatinha id is invalid', () => {
        const { error } = params.validate({ batatinha_id: 'invalid_guid' });

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toStrictEqual('"batatinha_id" must be a valid GUID');

        expect(error.details).toBeInstanceOf(Array);
        expect(error.details).toHaveLength(1);

        expect(error.details[0].path).toBeInstanceOf(Array);
        expect(error.details[0].path[0]).toStrictEqual('batatinha_id');
        expect(error.details[0].message).toStrictEqual('"batatinha_id" must be a valid GUID');
      });
    });
  });
});
