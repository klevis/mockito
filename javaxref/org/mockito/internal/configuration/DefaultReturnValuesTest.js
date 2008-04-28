defineStructure(
"DefaultReturnValuesTest",function(factory){with(factory) { typeTable(["java.util.ArrayList","cl"],["java.util.Collection","it"],["java.util.HashMap","cl"],["java.util.HashSet","cl"],["java.util.LinkedHashMap","cl"],["java.util.LinkedHashSet","cl"],["java.util.LinkedList","cl"],["java.util.List","it"],["java.util.Map","it"],["java.util.Set","it"],["java.util.SortedMap","it"],["java.util.SortedSet","it"],["java.util.TreeMap","cl"],["java.util.TreeSet","cl"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.internal.configuration.DefaultReturnValuesTest","cl"],["java.lang.SuppressWarnings","an"],["org.mockito.internal.configuration.DefaultReturnValues","cl"],["junit.framework.Assert","cl"],["java.lang.Class","cl"],["java.util.AbstractCollection","cl"],["java.util.AbstractMap","cl"],["java.lang.Object","cl"],["java.lang.String","cl"],["java.lang.Boolean","cl"],["java.lang.Character","cl"],["java.lang.Byte","cl"],["java.lang.Short","cl"],["java.lang.Integer","cl"],["java.lang.Long","cl"],["java.lang.Float","cl"],["java.lang.Double","cl"]),methodTable([16,"shouldReturnEmptyCollectionsOrNullForNonCollections",[],"me"],[18,"DefaultReturnValues",[],"co"],[19,"assertTrue",["boolean"],"st me"],[18,"returnValueFor",[20],"me"],[1,"isEmpty",[],"me"],[9,"isEmpty",[],"me"],[3,"isEmpty",[],"me"],[13,"isEmpty",[],"me"],[7,"isEmpty",[],"me"],[0,"isEmpty",[],"me"],[21,"isEmpty",[],"me"],[8,"isEmpty",[],"me"],[2,"isEmpty",[],"me"],[22,"isEmpty",[],"me"],[19,"assertNull",[23],"st me"],[16,"shouldReturnPrimitive",[],"me"],[19,"assertEquals",[23,23],"st me"]),localVariableTable(["values","shouldReturnEmptyCollectionsOrNullForNonCollections()-values"],["values","shouldReturnPrimitive()-values"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.configuration;",nl,nl,ip," java.util.",T(0),";",nl,ip," java.util.",T(1),";",nl,ip," java.util.",T(2),";",nl,ip," java.util.",T(3),";",nl,ip," java.util.",T(4),";",nl,ip," java.util.",T(5),";",nl,ip," java.util.",T(6),";",nl,ip," java.util.",T(7),";",nl,ip," java.util.",T(8),";",nl,ip," java.util.",T(9),";",nl,ip," java.util.",T(10),";",nl,ip," java.util.",T(11),";",nl,ip," java.util.",T(12),";",nl,ip," java.util.",T(13),";",nl,nl,ip," org.junit.",T(14),";",nl,ip," org.mockito.",T(15),";",nl,nl,C(16,[],$(pu,_,c,_,I("DefaultReturnValuesTest"),_,ex,_,T(15),_,B(nl,w(4),nl,w(4),M(0,[],[],$("@",T(17),P(L("\"unchecked\"")),nl,w(4),"@",T(14),_,pu,_,v,_,I("shouldReturnEmptyCollectionsOrNullForNonCollections"),P(),_,B(nl,w(8),V(0,$(T(18),_,I("values")," = ",n,_,N(1),P(),";")),nl,w(8),nl,w(8),N(2),P(P(P(T(1)),_,W(0),".",N(3),P(T(1),".",c)),".",N(4),P()),";",nl,nl,w(8),N(2),P(P(P(T(9)),_,W(0),".",N(3),P(T(9),".",c)),".",N(5),P()),";",nl,w(8),N(2),P(P(P(T(11)),_,W(0),".",N(3),P(T(11),".",c)),".",N(5),P()),";",nl,w(8),N(2),P(P(P(T(3)),_,W(0),".",N(3),P(T(3),".",c)),".",N(6),P()),";",nl,w(8),N(2),P(P(P(T(13)),_,W(0),".",N(3),P(T(13),".",c)),".",N(7),P()),";",nl,w(8),N(2),P(P(P(T(5)),_,W(0),".",N(3),P(T(5),".",c)),".",N(6),P()),";",nl,nl,w(8),N(2),P(P(P(T(7)),_,W(0),".",N(3),P(T(7),".",c)),".",N(8),P()),";",nl,w(8),N(2),P(P(P(T(0)),_,W(0),".",N(3),P(T(0),".",c)),".",N(9),P()),";",nl,w(8),N(2),P(P(P(T(6)),_,W(0),".",N(3),P(T(6),".",c)),".",N(10),P()),";",nl,nl,w(8),N(2),P(P(P(T(8)),_,W(0),".",N(3),P(T(8),".",c)),".",N(11),P()),";",nl,w(8),N(2),P(P(P(T(10)),_,W(0),".",N(3),P(T(10),".",c)),".",N(11),P()),";",nl,w(8),N(2),P(P(P(T(2)),_,W(0),".",N(3),P(T(2),".",c)),".",N(12),P()),";",nl,w(8),N(2),P(P(P(T(12)),_,W(0),".",N(3),P(T(12),".",c)),".",N(13),P()),";",nl,w(8),N(2),P(P(P(T(4)),_,W(0),".",N(3),P(T(4),".",c)),".",N(12),P()),";",nl,w(8),nl,w(8),N(14),P(W(0),".",N(3),P(T(24),".",c)),";",nl,w(4)))),nl,w(4),nl,w(4),M(15,[],[],$("@",T(14),_,pu,_,v,_,I("shouldReturnPrimitive"),P(),_,B(nl,w(8),V(1,$(T(18),_,I("values")," = ",n,_,N(1),P(),";")),nl,w(8),nl,w(8),N(16),P(L("false"),", ",W(1),".",N(3),P(T(25),".",G(25,"st fi","TYPE"))),";",nl,w(8),N(16),P(P(ch),_,L("0"),", ",W(1),".",N(3),P(T(26),".",G(26,"st fi","TYPE"))),";",nl,w(8),N(16),P(L("0"),", ",W(1),".",N(3),P(T(27),".",G(27,"st fi","TYPE"))),";",nl,w(8),N(16),P(L("0"),", ",W(1),".",N(3),P(T(28),".",G(28,"st fi","TYPE"))),";",nl,w(8),N(16),P(L("0"),", ",W(1),".",N(3),P(T(29),".",G(29,"st fi","TYPE"))),";",nl,w(8),N(16),P(L("0"),", ",W(1),".",N(3),P(T(30),".",G(30,"st fi","TYPE"))),";",nl,w(8),N(16),P(L("0"),", ",W(1),".",N(3),P(T(31),".",G(31,"st fi","TYPE"))),";",nl,w(8),N(16),P(L("0"),", ",W(1),".",N(3),P(T(32),".",G(32,"st fi","TYPE"))),";",nl,w(4)))),nl))),nl);}});