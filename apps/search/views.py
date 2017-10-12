import os
import json

from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import viewsets


@permission_classes((AllowAny,))
class BondSearchViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for bond search.
    """

    def list(self, request):
        json_data = open(os.path.abspath(os.path.join(os.path.dirname(__file__),
                                                      '../../samples/login/bond_search.json'))).read()
        data = json.loads(json_data)
        return Response(data)