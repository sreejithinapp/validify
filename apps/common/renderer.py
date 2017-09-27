from rest_framework.renderers import JSONRenderer


class ValidifyJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = renderer_context.get('response', None)
        data = {'status_code': response.status_code, 'data': data}
        return super(ValidifyJSONRenderer, self).render(data, accepted_media_type, renderer_context)